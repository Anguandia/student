var students = require('../dummy/students.js');
class StudentController {
    // Get all students
    static getAllStudents(req, res) {
          return res.status(200).json({
                students,
                message: "All the students",
          });
    }
    // Get a single student
    static getSingleStudent(req, res) {
           const findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
           if (findStudent) {
               return res.status(200).json({
                     student: findStudent,
                     message: "A single student record",
               });
           }
           return res.status(404).json({
                 message: "Student record not found",
           });
    }
    // create a student
    static createStudent(req, res){
        var student = req.body;
        students.push(student);
        return res.status(201).json({
            status: 201,
            data: student
        });
    }
}
module.exports = StudentController;
