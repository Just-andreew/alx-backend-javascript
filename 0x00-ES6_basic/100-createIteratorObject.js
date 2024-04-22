export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees); // Get all department employee arrays
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= allEmployees.length) {
        return { done: true }; // No more departments or employees
      }

      const departmentEmployees = allEmployees[currentDepartmentIndex];
      if (currentEmployeeIndex >= departmentEmployees.length) {
        currentDepartmentIndex++; // Move to next department
        currentEmployeeIndex = 0; // Reset employee index
      }

      const employee = departmentEmployees[currentEmployeeIndex];
      currentEmployeeIndex++; // Move to next employee in current department
      return { value: employee, done: false };
    },
  };
}
