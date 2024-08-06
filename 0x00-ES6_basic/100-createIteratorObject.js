export default function createIteratorObject(report) {
  let allEmployees = report.allEmployees;
  let departments = Object.keys(allEmployees);
  let index = 0;
  let departmentIndex = 0;
  let employees = allEmployees[departments[departmentIndex]];

  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else if (departmentIndex < departments.length - 1) {
        departmentIndex++;
        employees = allEmployees[departments[departmentIndex]];
        index = 0;
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

