// calculus.js - Calculus category problems

const calculusProblems = [
  {
    id: "c1",
    category: "Calculus",
    question: "Evaluate: \n$\\int (3x^2 - 6x + 4) dx$",
    answer: "$x^3 - 3x^2 + 4x + C$"
  },
  {
    id: "c2",
    category: "Calculus",
    question: "Find: \n$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$",
    answer: "$4$"
  },
  {
    id: "c3",
    category: "Calculus",
    question: "Evaluate:\n$\\int_{R_1}^{R_2} \\frac{1}{r} dr$",
    answer: "$\\ln(R_2) - \\ln(R_1) = \\ln\\frac{R_2}{R_1}$"
  },
  {
    id: "c4",
    category: "Calculus",
    question: "Evaluate: \n$\\int_{0}^{L}\\int_{0}^{W} xy\\, dx\\, dy$",
    answer: "$\\frac{L^2 W^2}{4}$"
  },
  {
    id: "c5",
    category: "Calculus",
    question: "Compute: \n$\\int e^{-\\alpha x^2} dx$ \nYou can express the answer in terms of the error function.",
    answer: "$\\frac{\\sqrt{\\pi}}{2\\sqrt{\\alpha}} \\text{erf}(x\\sqrt{\\alpha}) + C$"
  },
  {
    id: "c6",
    category: "Calculus",
    question: "Evaluate: \n$\\int_{0}^{R} \\frac{1}{r} dr$",
    answer: "$\\ln(R) - \\lim_{r \\to 0^+}\\ln(r)$ (Integral diverges as $r \\to 0^+$)"
  },
  {
    id: "c7",
    category: "Calculus",
    question: "Evaluate: \n$\\int_{0}^{L}\\int_{0}^{W} xy\\, dx\\, dy$",
    answer: "$\\frac{L^2 W^2}{4}$"
  },
  {
    id: "c8",
    category: "Calculus",
    question: "Compute: \n$\\int e^{-\\alpha x^2} dx$",
    answer: "$\\frac{\\sqrt{\\pi}}{2\\sqrt{\\alpha}} \\text{erf}(x\\sqrt{\\alpha}) + C$"
  },
  {
    id: "c9",
    category: "Calculus",
    question: "Evaluate: \n$\\int_{0}^{2\\pi}\\int_{0}^{\\pi}\\int_{0}^{R} \\rho r^2 \\sin\\phi \\,dr\\, d\\phi\\, d\\theta$",
    answer: "$\\rho \\frac{4}{3}\\pi R^3$"
  },
  {
    id: "c10",
    category: "Calculus",
    question: "Evaluate: \n$\\int_{r_i}^{r_o} \\frac{dr}{r}$",
    answer: "$\\ln\\frac{r_o}{r_i}$"
  },
  // Add more calculus problems here
];

export default calculusProblems; 