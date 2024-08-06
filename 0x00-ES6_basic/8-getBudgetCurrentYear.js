function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capital) {
  let currentYear = getCurrentYear();
  let budget = {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capital-${currentYear}`]: capital,
  };

  return budget;
}

