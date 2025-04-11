import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Flatten all problems into a single array for randomization
const allProblems = [
  // Algebra problems
  { 
    id: "a1", 
    category: "Algebra",
    question: "Solve for x: 3x + 5 = 17", 
    answer: "x = 4",
    latex: "x = 4" 
  },
  { 
    id: "a2", 
    category: "Algebra",
    question: "Simplify: \\frac{x^2 - 9}{x - 3}", 
    answer: "x + 3, for x ≠ 3",
    latex: "x + 3, \\text{ for } x \\neq 3" 
  },
  { 
    id: "a3",
    category: "Algebra", 
    question: "Solve the system: \\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}", 
    answer: "x = 2, y = 1",
    latex: "x = 2, y = 1" 
  },
  // Calculus problems
  { 
    id: "c1",
    category: "Calculus", 
    question: "Find \\frac{d}{dx}(x^3 + 2x^2 - 4x + 7)", 
    answer: "3x² + 4x - 4",
    latex: "3x^2 + 4x - 4" 
  },
  { 
    id: "c2",
    category: "Calculus", 
    question: "Evaluate \\int_0^1 (2x + 3) dx", 
    answer: "4",
    latex: "4" 
  },
  { 
    id: "c3",
    category: "Calculus", 
    question: "Find the limit: \\lim_{x \\to 0} \\frac{\\sin x}{x}", 
    answer: "1",
    latex: "1" 
  },
  // Differential Equations problems
  { 
    id: "d1",
    category: "Differential Equations", 
    question: "Solve the differential equation: \\frac{dy}{dx} = 2x", 
    answer: "y = x² + C",
    latex: "y = x^2 + C" 
  },
  { 
    id: "d2",
    category: "Differential Equations", 
    question: "Solve: \\frac{dy}{dx} + 2y = e^x", 
    answer: "y = (1/3)e^x + Ce^(-2x)",
    latex: "y = \\frac{1}{3}e^x + Ce^{-2x}" 
  },
  { 
    id: "d3",
    category: "Differential Equations", 
    question: "Solve the first-order linear differential equation: \\frac{dy}{dx} + P(x)y = Q(x) where P(x) = \\frac{1}{x} and Q(x) = \\frac{x^2 + 1}{x}", 
    answer: "y = x ln|x| + x + C/x",
    latex: "y = x\\ln|x| + x + \\frac{C}{x}" 
  },
  // Transport Phenomena problems
  { 
    id: "t1",
    category: "Transport Phenomena", 
    question: "In a heat exchanger, the temperature profile is given by T(x) = 100e^{-0.2x}. Find the temperature gradient at x = 5.", 
    answer: "dT/dx = -13.53 °C/m",
    latex: "\\frac{dT}{dx} = -13.53 \\text{ °C/m}" 
  },
  { 
    id: "t2",
    category: "Transport Phenomena", 
    question: "The steady-state temperature distribution in a slab is given by: \\frac{d^2T}{dx^2} = 0, with boundary conditions T(0) = 100°C and T(L) = 20°C. Find T(x).", 
    answer: "T(x) = 100 - (80x/L) °C",
    latex: "T(x) = 100 - \\frac{80x}{L} \\text{ °C}" 
  },
  { 
    id: "t3",
    category: "Transport Phenomena", 
    question: "For a mass transfer problem, the concentration distribution is C(x,t) = C_0 \\text{erfc}\\left(\\frac{x}{2\\sqrt{Dt}}\\right). Find the flux at x = 0.", 
    answer: "J(0,t) = C₀√(D/πt)",
    latex: "J(0,t) = C_0\\sqrt{\\frac{D}{\\pi t}}" 
  }
];

// Custom Math component that uses KaTeX directly
function Math({ math, display = false }) {
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current) {
      katex.render(math, ref.current, {
        throwOnError: false,
        displayMode: display
      });
    }
  }, [math, display]);
  
  return <span ref={ref} />;
}

function App() {
  const [currentProblem, setCurrentProblem] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answersShown, setAnswersShown] = useState(0);
  const [totalProblems, setTotalProblems] = useState(0);

  // Get a random problem
  const getRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * allProblems.length);
    return allProblems[randomIndex];
  };

  // Initialize with a random problem
  useEffect(() => {
    setCurrentProblem(getRandomProblem());
    setTotalProblems(prev => prev + 1);
  }, []);

  const handleNextProblem = () => {
    setCurrentProblem(getRandomProblem());
    setShowAnswer(false);
    setTotalProblems(prev => prev + 1);
  };

  const toggleAnswer = () => {
    if (!showAnswer) {
      setAnswersShown(prev => prev + 1);
    }
    setShowAnswer(!showAnswer);
  };

  // Calculate percentage of problems checked
  const percentageChecked = totalProblems > 0 
    ? Math.round((answersShown / totalProblems) * 100) 
    : 0;

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
        padding: "1.5rem", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ 
          fontSize: "1.75rem", 
          fontWeight: "700", 
          textAlign: "center",
          margin: 0
        }}>
          Transport Phenomena Practice
        </h1>
      </header>
      
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
            maxWidth: "700px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            border: "1px solid #E5E7EB"
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
                border: "1px solid #E5E7EB"
              }}>
                <Math math={currentProblem.question} display={true} />
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
                  border: "1px solid #E5E7EB"
                }}>
                  <Math math={currentProblem.latex} display={true} />
                </div>
              </div>
            )}
            
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "1rem",
              marginTop: "1.5rem"
            }}>
              <button 
                onClick={toggleAnswer} 
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
                onClick={handleNextProblem} 
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

        <div style={{ 
          marginTop: "2rem", 
          textAlign: "center", 
          color: "#8A8B8C",
          fontSize: "0.875rem"
        }}>
          Problems attempted: {totalProblems} | Solutions viewed: {answersShown} ({percentageChecked}%)
        </div>
      </main>
      
      <footer style={{ 
        background: "#E5E7EB", 
        padding: "1rem", 
        textAlign: "center", 
        color: "#6B7280", 
        fontSize: "0.875rem",
        borderTop: "1px solid #D1D5DB"
      }}>
        Footer test
      </footer>
    </div>
  );
}

export default App;