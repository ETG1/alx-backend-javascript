import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capital) {
  const budget = getBudgetObject(income, gdp, capital);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

