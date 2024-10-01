const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim().length > 0);
      const header = lines.shift()
      const studentsByField = {};

      lines.forEach(line => {
        const [firstname, field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });

      resolve(studentsByField);
    });
  });
}

module.exports = { readDatabase };

