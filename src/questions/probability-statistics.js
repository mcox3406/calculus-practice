// probability-statistics.js - Probability and Statistics category problems

const probabilityStatisticsProblems = [
  {
    id: "p1",
    category: "Probability and Statistics",
    question: "A fair die is rolled twice. What's the probability that the sum is exactly 7?",
    answer: "$\\frac{1}{6}$"
  },
  {
    id: "p2",
    category: "Probability and Statistics",
    question: "If $X \\sim N(10, 4)$, find $P(X > 12)$.",
    answer: "$P(X > 12) \\approx 0.1587$"
  },
  { 
    id: "p3",
    category: "Probability and Statistics",
    question: "If $X$ and $Y$ are independent random variables uniformly distributed on $[0,1]$, what is the probability that $X+Y \\leq 1$?",
    answer: "The probability corresponds to the area of the triangle defined by $x + y \\leq 1$ in the unit square, which is $\\frac{1}{2}$."
  },
  { 
    id: "p4",
    category: "Probability and Statistics",
    question: "A factory produces items with a 5% defect rate. A test for defects correctly identifies a defective item 90% of the time and has a 10% false positive rate. If an item tests positive, what is the probability that it is defective?",
    answer: "Using Bayes' theorem: \n\n$P(\\text{Defective}|\\text{Positive}) = \\frac{0.05 \\times 0.9}{0.05 \\times 0.9 + 0.95 \\times 0.1} \\approx 0.3214$."
  },
];

export default probabilityStatisticsProblems; 