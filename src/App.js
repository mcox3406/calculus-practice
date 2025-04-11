import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Sample problems organized by category
const problems = {
  algebra: [
    { 
      id: 1, 
      question: "Solve for x: 3x + 5 = 17", 
      answer: "x = 4",
      latex: "x = 4" 
    },
    { 
      id: 2, 
      question: "Simplify: \\frac{x^2 - 9}{x - 3}", 
      answer: "x + 3, for x ≠ 3",
      latex: "x + 3, \\text{ for } x \\neq 3" 
    },
    { 
      id: 3, 
      question: "Solve the system: \\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}", 
      answer: "x = 2, y = 1",
      latex: "x = 2, y = 1" 
    },
  ],
  calculus: [
    { 
      id: 1, 
      question: "Find \\frac{d}{dx}(x^3 + 2x^2 - 4x + 7)", 
      answer: "3x² + 4x - 4",
      latex: "3x^2 + 4x - 4" 
    },
    { 
      id: 2, 
      question: "Evaluate \\int_0^1 (2x + 3) dx", 
      answer: "4",
      latex: "4" 
    },
    { 
      id: 3, 
      question: "Find the limit: \\lim_{x \\to 0} \\frac{\\sin x}{x}", 
      answer: "1",
      latex: "1" 
    },
  ],
  diffEq: [
    { 
      id: 1, 
      question: "Solve the differential equation: \\frac{dy}{dx} = 2x", 
      answer: "y = x² + C",
      latex: "y = x^2 + C" 
    },
    { 
      id: 2, 
      question: "Solve: \\frac{dy}{dx} + 2y = e^x", 
      answer: "y = (1/3)e^x + Ce^(-2x)",
      latex: "y = \\frac{1}{3}e^x + Ce^{-2x}" 
    },
    { 
      id: 3, 
      question: "Solve the first-order linear differential equation: \\frac{dy}{dx} + P(x)y = Q(x) where P(x) = \\frac{1}{x} and Q(x) = \\frac{x^2 + 1}{x}", 
      answer: "y = x ln|x| + x + C/x",
      latex: "y = x\\ln|x| + x + \\frac{C}{x}" 
    },
  ],
  transport: [
    { 
      id: 1, 
      question: "In a heat exchanger, the temperature profile is given by T(x) = 100e^{-0.2x}. Find the temperature gradient at x = 5.", 
      answer: "dT/dx = -13.53 °C/m",
      latex: "\\frac{dT}{dx} = -13.53 \\text{ °C/m}" 
    },
    { 
      id: 2, 
      question: "The steady-state temperature distribution in a slab is given by: \\frac{d^2T}{dx^2} = 0, with boundary conditions T(0) = 100°C and T(L) = 20°C. Find T(x).", 
      answer: "T(x) = 100 - (80x/L) °C",
      latex: "T(x) = 100 - \\frac{80x}{L} \\text{ °C}" 
    },
    { 
      id: 3, 
      question: "For a mass transfer problem, the concentration distribution is C(x,t) = C_0 \\text{erfc}\\left(\\frac{x}{2\\sqrt{Dt}}\\right). Find the flux at x = 0.", 
      answer: "J(0,t) = C₀√(D/πt)",
      latex: "J(0,t) = C_0\\sqrt{\\frac{D}{\\pi t}}" 
    },
  ]
};

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
  const [category, setCategory] = useState('algebra');
  const [currentProblem, setCurrentProblem] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [problemIndex, setProblemIndex] = useState(0);

  useEffect(() => {
    // Reset when category changes
    setProblemIndex(0);
    setShowAnswer(false);
  }, [category]);

  useEffect(() => {
    if (problems[category] && problems[category].length > 0) {
      setCurrentProblem(problems[category][problemIndex]);
      setShowAnswer(false);
    }
  }, [category, problemIndex]);

  const handleNextProblem = () => {
    const nextIndex = (problemIndex + 1) % problems[category].length;
    setProblemIndex(nextIndex);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Transport Phenomena Practice</h1>
      </header>
      
      <main className="flex-grow p-4 flex flex-col items-center">
        <div className="mb-6 w-full max-w-md">
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
          >
            <option value="algebra">Algebra</option>
            <option value="calculus">Calculus</option>
            <option value="diffEq">Differential Equations</option>
            <option value="transport">Transport Phenomena</option>
          </select>
        </div>
        
        {currentProblem && (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Problem:</h2>
              <div className="p-4 bg-gray-50 rounded">
                <Math math={currentProblem.question} display={true} />
              </div>
            </div>
            
            {showAnswer && (
              <div className="mb-8 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2">Solution:</h2>
                <div className="p-4 bg-gray-50 rounded">
                  <Math math={currentProblem.latex} display={true} />
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={toggleAnswer} 
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex-1"
              >
                {showAnswer ? "Hide Answer" : "Show Answer"}
              </button>
              <button 
                onClick={handleNextProblem} 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex-1"
              >
                Next Problem
              </button>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-200 p-4 text-center text-gray-600 text-sm">
        Practice makes perfect! Keep going!
      </footer>
    </div>
  );
}

export default App;