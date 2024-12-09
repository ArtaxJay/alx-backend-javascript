const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Filter out empty lines

        if (lines.length <= 1) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        const fields = {};
        const students = lines.slice(1); // Skip the header

        for (const student of students) {
          const [firstname, , , field] = student
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
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(', ')}`,
          );
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
