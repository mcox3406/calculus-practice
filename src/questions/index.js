// index.js - Combines all question categories

import algebraProblems from './algebra';
import calculusProblems from './calculus';
import differentialEquationsProblems from './differential-equations';
import probabilityStatisticsProblems from './probability-statistics';
import linearAlgebraProblems from './linear-algebra';
import numericalMethodsProblems from './numerical-methods';

// Combine all problems into a single array
export const allProblems = [
  ...algebraProblems,
  ...calculusProblems,
  ...differentialEquationsProblems,
  ...probabilityStatisticsProblems,
  ...linearAlgebraProblems,
  ...numericalMethodsProblems
];

// Export individual categories as well for targeted access
export {
  algebraProblems,
  calculusProblems,
  differentialEquationsProblems,
  probabilityStatisticsProblems,
  linearAlgebraProblems,
  numericalMethodsProblems
}; 