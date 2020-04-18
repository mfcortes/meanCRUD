const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeSchema = new Schema(
    {
        name : {type: String , required: true},
        position : {type: String , required: true},
        office : {type: String , required: true},
        salario : {type: Number, required: true}
    }
);

module.exports = mongoose.model('Employee',EmployeSchema );
