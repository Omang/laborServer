const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
	employee_fname: {type: String},
	employee_lname: {type: String},
	employee_age: {type: String},
	employee_position: {type: String},
	employee_employer: {type: String},
	employee_email: {type: String},
	employee_phonenumber: {type: String}

}, {timestamps: true});

module.exports = mongoose.model('Employee', EmployeeSchema)