import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    try {
      const studentsByField = await readDatabase(path);
      res.status(200).send(buildStudentList(studentsByField));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(path);
      const studentList = studentsByField[major] || [];
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

// Helper function to build the response string
function buildStudentList(studentsByField) {
  const sortedFields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b));
  let output = 'This is the list of our students\n';

  sortedFields.forEach(field => {
    const studentList = studentsByField[field];
    output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
  });

  return output.trim();
}

export default StudentsController;
