const express = require('express');
const body_parser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const Employee = require('./models/EmployeeModel');

const app = express();
dotenv.config();
dbConnect();
const PORT = 3004;

app.use(body_parser.json());
app.use('/uploads', express.static(__dirname+'/uploads'));
app.use(cors({
 
 credentials: true,
 origin: "http://localhost:3000"

}));

app.post('/addemployee', async(req, res)=>{

    const {employee_fname, employee_lname, 
         employee_age, employee_position, employee_employer} = req.body;

    try{

        const addemployee = await Employee.create({
        employee_fname: employee_fname,
        employee_lname: employee_lname,
        employee_age: employee_age,
        employee_position: employee_position,
        employee_employer: employee_employer
    });

        res.json(addemployee);


    }catch(e){
        throw new Error(e);
    }


})

app.post('/findbycompany', async(req, res)=>{
    const {company_name} = req.body;
    try{

        const findall = await Employee.find({employee_employer: company_name});

        if(findall){
            res.json(findall);
        }else{
            res.json({message: 'no employees'})
        }

    }catch(e){
        throw new Error(e)
    }
})


app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})