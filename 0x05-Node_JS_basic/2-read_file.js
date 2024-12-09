const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    // Filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const fields = {};
    const students = lines.slice(1); // Skip the header

    for (const student of students) {
      const [firstname, field] = student
        .split(',')
        .map((val) => val.trim());
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    const totalStudents = Object.values(fields).reduce(
      (sum, list) => sum + list.length,
      0,
    );
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
