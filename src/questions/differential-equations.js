// differential-equations.js - Differential Equations category problems

const differentialEquationsProblems = [
  {
    id: "d1",
    category: "Differential Equations",
    question: "Solve: \n$\\frac{dy}{dx} = 3y$",
    answer: "$y = Ce^{3x}$"
  },
  {
    id: "d2",
    category: "Differential Equations",
    question: "Solve: \n$\\frac{d^2y}{dx^2} - 4\\frac{dy}{dx} + 4y = 0$",
    answer: "$y = (C_1 + C_2x)e^{2x}$"
  },
  {
    id: "d3",
    category: "Differential Equations",
    question: "Solve for $T(r)$: \n$\\frac{1}{r}\\frac{d}{dr}\\left(r\\frac{dT}{dr}\\right) = 0$\nwith $T(r_i)=T_i$ and $T(r_o)=T_o$",
    answer: "$T(r) = T_i + \\frac{\\ln(r/r_i)}{\\ln(r_o/r_i)}(T_o - T_i)$"
  },
  {
    id: "d4",
    category: "Differential Equations",
    question: "Solve for $T(x,t)$: \n$\\frac{\\partial T}{\\partial t} = \\alpha \\frac{\\partial^2 T}{\\partial x^2}$\nwith $T(0,t)=T(L,t)=0$ and $T(x,0)=T_0$",
    answer: "$T(x,t) = \\sum_{n=1}^{\\infty} B_n \\sin\\left(\\frac{n\\pi x}{L}\\right)e^{-\\alpha (n\\pi/L)^2 t}$, where $B_n = \\frac{2T_0}{n\\pi}[1-(-1)^n]$"
  },
  {
    id: "d5",
    category: "Differential Equations",
    question: "Solve for $C(r)$: \n$\\frac{1}{r^2}\\frac{d}{dr}\\left(r^2\\frac{dC}{dr}\\right) = 0$\nwith $C(r_i)=C_i$ and $C(r_o)=C_o$",
    answer: "$C(r) = C_i + \\frac{(C_o - C_i)(r_i/r - 1)}{(r_i/r_o - 1)}$"
  },
  {
    id: "d6",
    category: "Differential Equations",
    question: "Solve: \n$m\\frac{d^2y}{dt^2} + c\\frac{dy}{dt} + ky = 0$",
    answer: "$y(t)= \\alpha_1 e^{-\\frac{t(\\sqrt{c^2-4km}+c)}{2m}} + \\alpha_2 e^{\\frac{t(\\sqrt{c^2-4km}-c)}{2m}}$"
  },
  // {
  //   id: "d7",
  //   category: "Differential Equations",
  //   question: "Solve: \n$f'''(\\eta) + \\frac{1}{2}f(\\eta)f''(\\eta)=0$\nwith $f(0)=0$, $f'(0)=0$, $f'(\\infty)=1$",
  //   answer: "Solution typically obtained numerically."
  // },
  {
    id: "d8",
    category: "Differential Equations",
    question: "Use Laplace transform to solve: \n$\\frac{\\partial T}{\\partial t} = \\alpha \\frac{\\partial^2 T}{\\partial x^2}$\nwith $T(x,0)=0$, $T(0,t)=T_s$, $\\frac{\\partial T(L,t)}{\\partial x}=0$",
    answer: "$T(x,s)=\\frac{T_s}{s}\\frac{\\cosh\\left((L-x)\\sqrt{s/\\alpha}\\right)}{\\cosh\\left(L\\sqrt{s/\\alpha}\\right)}$"
  },
  // Add more differential equations problems here
];

export default differentialEquationsProblems; 