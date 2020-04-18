const express = require('express');
const router = express.Router();

const employee  = require('../controllers/employee.controller');


;

router.get('/', employee.getEmployees);

router.post('/', employee.createEmployee);

router.get('/:idE', employee.getEmployee);

router.put('/:idE', employee.editEmployee);

router.delete('/:idE', employee.deleteEmployee);



module.exports = router;