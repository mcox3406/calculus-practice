// questions.js - Database of practice problems

export const allProblems = [
  // Algebra problems
  { 
    id: "a1", 
    category: "Algebra",
    question: "Solve for $x$:\n$3x + 5 = 17$", 
    answer: "$x = 4$"
  },
  
  // Calculus problems
  { 
    id: "c1",
    category: "Calculus", 
    question: "Find the derivative of the function:\n$f(x) = x^3 + 2x^2 - 4x + 7$", 
    answer: "$\\frac{d}{dx}f(x) = 3x^2 + 4x - 4$"
  },
  
  // Differential Equations problems
  { 
    id: "d1",
    category: "Differential Equations", 
    question: "Solve the differential equation:\n$\\frac{dy}{dx} = 2x$\nHint: integrate both sides.", 
    answer: "$y = x^2 + C$"
  },
  
  // Transport Phenomena problems
  { 
    id: "t1",
    category: "Transport Phenomena", 
    question: "In a heat exchanger, the temperature profile is given by:\n$T(x) = 100e^{-0.2x}$\nFind the temperature gradient at $x = 5$.", 
    answer: "At $x = 5$:\n$\\frac{dT}{dx} = -13.53 \\text{ °C/m}$"
  },
];