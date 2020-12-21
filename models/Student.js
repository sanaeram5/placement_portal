const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create schema
const StudentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    studentid:{
        type:Number,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=Student=mongoose.model('student',StudentSchema);