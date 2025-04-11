import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { allProblems } from './questions';
import About from './About';

// Custom Math component that uses KaTeX directly
function Math({ math }) { // Removed 'display' prop, logic handles it internally
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && math) { // Add check for math prop existence
      // Split the text by newlines first
      const lines = math.split('\n');

      // Process each line and store its HTML and whether it's a block
      const processedLines = lines.map(line => {
        let lineHtml = '';
        let currentIndex = 0;
        const trimmedLine = line.trim();

        // Check if the line contains ONLY math (either $...$ or $$...$$)
        const isStandaloneDollar =
          trimmedLine.startsWith('$') &&
          trimmedLine.endsWith('$') &&
          (trimmedLine.match(/\$/g) || []).length === 2;
        const isStandaloneDoubleDollar =
          trimmedLine.startsWith('$$') &&
          trimmedLine.endsWith('$$') &&
          (trimmedLine.match(/\$\$/g) || []).length === 2;
        
        // Standalone if it's exclusively one type of math delimiter
        const isStandaloneEquation = isStandaloneDollar || isStandaloneDoubleDollar;
        
        // Determine the displayMode for KaTeX rendering within the loop
        let useDisplayModeForKaTeX = false;

        // Find all math delimiters
        while (currentIndex < line.length) {
          const displayStart = line.indexOf('$$', currentIndex);
          const inlineStart = line.indexOf('$', currentIndex);

          let startIndex;
          let delimiter;
          let isDisplayMath = false; // Is the *current* segment display math?

          // Determine the next math block type and position
          if (displayStart !== -1 && (inlineStart === -1 || displayStart < inlineStart)) {
             startIndex = displayStart;
             delimiter = '$$';
             isDisplayMath = true;
          } else if (inlineStart !== -1) {
             startIndex = inlineStart;
             delimiter = '$';
             isDisplayMath = false; // Inline math
          } else {
             // No more math delimiters found
             startIndex = -1;
          }


          if (startIndex === -1) {
            // No more math, append the rest as text
            lineHtml += escapeHtml(line.slice(currentIndex)); // Escape text
            break;
          }

          // Append text before math
          if (startIndex > currentIndex) {
            lineHtml += escapeHtml(line.slice(currentIndex, startIndex)); // Escape text
          }

          // Find end of math
          const endIndex = line.indexOf(delimiter, startIndex + delimiter.length);
          if (endIndex === -1) {
            // Unterminated math, treat as text
            lineHtml += escapeHtml(line.slice(startIndex)); // Escape text
            break;
          }

          // Extract and render math
          const mathContent = line.slice(startIndex + delimiter.length, endIndex);
          
          // Determine if THIS KaTeX call needs displayMode
          // It's display if the delimiters were $$ OR if the whole line is just $...$
          useDisplayModeForKaTeX = isDisplayMath || isStandaloneDollar;

          try {
             // Render math using KaTeX
             const renderedMath = katex.renderToString(mathContent, {
               throwOnError: false,
               displayMode: useDisplayModeForKaTeX,
               output: 'html', // Ensure HTML output
             });
             lineHtml += renderedMath; // Add KaTeX HTML output
          } catch (error) {
              console.error("KaTeX rendering error:", error);
              // Append raw content with error indication if KaTeX fails
              lineHtml += `<span style="color: red;">${escapeHtml(mathContent)}</span>`;
          }


          currentIndex = endIndex + delimiter.length;
        }
        
        // If the entire line was a standalone equation, wrap it in a centered div
        // This div provides the block layout and spacing.
        if (isStandaloneEquation) {
           // Add some margin for spacing, rely on displayMode for centering
           // KaTeX display mode usually centers automatically
           lineHtml = `<div style="margin: 0.5em 0;">${lineHtml}</div>`;
        }
        
        // Return the processed HTML for the line and whether it resulted in a block
        return { html: lineHtml, isBlock: isStandaloneEquation };
      });

      // Join lines, adding <br> ONLY between non-block lines
      let finalHtml = '';
      for(let i = 0; i < processedLines.length; i++) {
        finalHtml += processedLines[i].html;
        // Add <br> if this is NOT the last line AND the current line wasn't a block
        if (i < processedLines.length - 1 && !processedLines[i].isBlock) {
            // Optional: You might also want to check if the *next* line is a block
            // and avoid a <br> right before a block, but this is simpler.
            finalHtml += '<br>';
        }
      }

      ref.current.innerHTML = finalHtml;
    } else if (ref.current) {
        // Clear content if math prop is null or empty
        ref.current.innerHTML = '';
    }
  }, [math]); // Rerun effect when math content changes

  // Helper function to escape HTML special characters in text segments
  function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }

  // Use a standard line-height for the container
  return <div ref={ref} style={{ display: 'block', lineHeight: '1.6' }} />;
}

function PracticePage({ currentProblem, showAnswer, onToggleAnswer, onNextProblem }) {
  return (
    <main style={{ 
      flexGrow: 1, 
      padding: "2rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      justifyContent: "center"
    }}>
      {currentProblem && (
        <div style={{ 
          background: "white", 
          borderRadius: "0.5rem", 
          padding: "2rem", 
          width: "100%", 
          maxWidth: "600px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          border: "1px solid #E5E7EB",
          boxSizing: "border-box"
        }}>
          <div style={{
            position: "relative",
            marginBottom: "0.5rem"
          }}>
            <span style={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: "0.875rem",
              color: "#8A8B8C",
              fontWeight: "500"
            }}>
              {currentProblem.category}
            </span>
          </div>
          
          <div style={{ marginBottom: "2rem", marginTop: "1.5rem" }}>
            <h2 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "600", 
              marginBottom: "1rem",
              color: "#333333"
            }}>
              Problem:
            </h2>
            <div style={{ 
              padding: "1.5rem", 
              background: "#F8F9FA", 
              borderRadius: "0.375rem",
              border: "1px solid #E5E7EB",
              maxHeight: "600px",
              overflowY: "auto",
              width: "100%",
              boxSizing: "border-box"
            }}>
              <div style={{ 
                display: "block", 
                width: "100%",
                overflowX: "auto"
              }}>
                <Math math={currentProblem.question} />
              </div>
            </div>
          </div>
          
          {showAnswer && (
            <div style={{ 
              marginBottom: "2rem", 
              borderTop: "1px solid #E5E7EB", 
              paddingTop: "1.5rem"
            }}>
              <h2 style={{ 
                fontSize: "1.25rem", 
                fontWeight: "600", 
                marginBottom: "1rem",
                color: "#333333"
              }}>
                Solution:
              </h2>
              <div style={{ 
                padding: "1.5rem", 
                background: "#F8F9FA", 
                borderRadius: "0.375rem",
                border: "1px solid #E5E7EB",
                maxHeight: "500px",
                overflowY: "auto",
                width: "100%",
                boxSizing: "border-box"
              }}>
                <div style={{ 
                  display: "block", 
                  width: "100%",
                  overflowX: "auto"
                }}>
                  <Math math={currentProblem.answer} />
                </div>
              </div>
            </div>
          )}
          
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem",
            marginTop: "1.5rem",
            width: "100%"
          }}>
            <button 
              onClick={onToggleAnswer} 
              style={{ 
                padding: "0.75rem", 
                borderRadius: "0.375rem", 
                border: "none", 
                background: showAnswer ? "#8A8B8C" : "#A31F34", 
                color: "white", 
                fontWeight: "500", 
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              {showAnswer ? "Hide Solution" : "Show Solution"}
            </button>
            <button 
              onClick={onNextProblem} 
              style={{ 
                padding: "0.75rem", 
                borderRadius: "0.375rem", 
                border: "none", 
                background: "#333333", 
                color: "white", 
                fontWeight: "500", 
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              Next Problem
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function App() {
  const [currentProblem, setCurrentProblem] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeCategories, setActiveCategories] = useState({
    'Algebra': true,
    'Calculus': true,
    'Differential Equations': true,
    'Transport Phenomena': true
  });
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState('practice'); // 'practice' or 'about'

  // Filter problems based on active categories
  const filteredProblems = allProblems.filter(
    problem => activeCategories[problem.category]
  );

  // Get a random problem
  const getRandomProblem = () => {
    if (filteredProblems.length === 0) return null;
    const randomIndex = window.Math.floor(window.Math.random() * filteredProblems.length);
    return filteredProblems[randomIndex];
  };

  // Initialize with a random problem
  useEffect(() => {
    const problem = getRandomProblem();
    if (problem) {
      setCurrentProblem(problem);
    }
  }, [activeCategories]); 

  const handleNextProblem = () => {
    const problem = getRandomProblem();
    if (problem) {
      setCurrentProblem(problem);
      setShowAnswer(false);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const toggleCategory = (category) => {
    setActiveCategories(prev => {
      const wouldAllBeDisabled = Object.entries({
        ...prev,
        [category]: !prev[category]
      }).every(([_, isActive]) => !isActive);
      
      if (wouldAllBeDisabled) return prev;
      
      return {
        ...prev,
        [category]: !prev[category]
      };
    });
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: "flex", 
      flexDirection: "column", 
      minHeight: "100vh",
      background: "#F2F3F4"
    }}>
      <header style={{ 
        background: "#A31F34", 
        color: "white", 
        padding: "1rem", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem"
        }}>
          <h1 style={{ 
            fontSize: "1.75rem", 
            fontWeight: "700",
            margin: 0
          }}>
            CalcSprint
          </h1>
          <nav style={{
            display: "flex",
            gap: "1.5rem"
          }}>
            <button
              onClick={() => setCurrentPage('practice')}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer",
                padding: "0.5rem",
                fontWeight: currentPage === 'practice' ? "600" : "400",
                borderBottom: currentPage === 'practice' ? "2px solid white" : "none"
              }}
            >
              Practice
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer",
                padding: "0.5rem",
                fontWeight: currentPage === 'about' ? "600" : "400",
                borderBottom: currentPage === 'about' ? "2px solid white" : "none"
              }}
            >
              About
            </button>
          </nav>
        </div>
      </header>

      {currentPage === 'practice' ? (
        <>
          <button 
            onClick={() => setShowCategoryFilter(!showCategoryFilter)}
            style={{
              margin: "1rem auto",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              background: "#333333",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem"
            }}
          >
            {showCategoryFilter ? "Hide Filters" : "Filter Categories"}
          </button>
          
          {showCategoryFilter && (
            <div style={{
              background: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              margin: "0 auto 2rem",
              width: "100%",
              maxWidth: "700px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: "600",
                marginTop: 0,
                marginBottom: "0.75rem"
              }}>
                Select Categories:
              </h3>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem"
              }}>
                {Object.keys(activeCategories).map(category => (
                  <label 
                    key={category}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "0.5rem",
                      background: activeCategories[category] ? "#F3F4F6" : "transparent",
                      borderRadius: "0.25rem",
                      border: "1px solid #E5E7EB"
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={activeCategories[category]}
                      onChange={() => toggleCategory(category)}
                      style={{ marginRight: "0.5rem" }}
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
          )}
          
          <PracticePage
            currentProblem={currentProblem}
            showAnswer={showAnswer}
            onToggleAnswer={toggleAnswer}
            onNextProblem={handleNextProblem}
          />
        </>
      ) : (
        <About />
      )}

      <footer style={{ 
        background: "#E5E7EB", 
        padding: "1rem", 
        textAlign: "center", 
        color: "#6B7280", 
        fontSize: "0.875rem",
        borderTop: "1px solid #D1D5DB"
      }}>
      </footer>
    </div>
  );
}

export default App;