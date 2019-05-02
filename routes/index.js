var { Router } = require('express');
var StudentController = require('../controllers/studentController.js');
const routes = Router();
routes.get('/', StudentController.getAllStudents);
routes.get('/:id', StudentController.getSingleStudent);
routes.post('/students', StudentController.createStudent);
module.exports = routes;
