export default function createIteratorObject(report) {
  const iterEmployees = [];
  for (const index of Object.values(report.allEmployees)) {
    iterEmployees.push(...index);
  }
  return iterEmployees;
}
