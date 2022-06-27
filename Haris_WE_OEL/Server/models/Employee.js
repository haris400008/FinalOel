const mongoose= require('mongoose');

const EmployeeSchema= new mongoose.Schema({
    employeeName:{
        type:String,
        required: true,
    },
    designation:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    }
});

const Employee = mongoose.model("Employee",EmployeeSchema)
module.exports=Employee;