const Employee = require('../models/employees');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json(employees);  

    
}

employeeCtrl.createEmployee = async (req, res) => {
    
    const employee = new Employee(req.body);
    await employee.save();
    console.log(employee);
    res.status(200).json({Status : 'Empleado Guardado'});
}

employeeCtrl.getEmployee = async (req, res) => {
    
    console.log(req.params.idE)
    const expmloyee = await Employee.findById(req.params.idE);
    res.status(200).json(
        expmloyee
    );
}

employeeCtrl.editEmployee = async (req, res) => {

    const employee =  await Employee.findByIdAndUpdate(req.params.idE,req.body);
    res.status(200).json(
        {Status : 'Empleado Modificado'} 
    );
}

employeeCtrl.deleteEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndDelete({"_id":req.params.idE});
    //const employee = await Employee.findByIdAndRemove(req.params.idE);

    res.status(200).json(
        {Status : "Empleado Eliminado"}
        
    );
}






module.exports = employeeCtrl;

