const express=require('express');
const router=express.Router();

//Item model
const Student=require('../../models/Student');

//@route GET api/student
//@desc Get All Students
//@access public
router.get('/',(req,res)=>{
    Student.find()
    .sort({studentid:1})
    .then(students=>res.json(students))
});

//@route POST api/student
//@desc Create a student
//@access public
router
    .post('/',(req,res)=>{
    const newStudent=new Student({
        name:req.body.name,
        studentid:req.body.studentid,
        rollno:req.body.rollno,
        emailid:req.body.emailid,
        phoneno:req.body.phoneno,
        password:req.body.password
    });
    newStudent.save().then(student=>res.json(student)); 
});

//@route DELETE api/student/:id
//@desc Delete a student
//@access public
router
    .delete('/:id',(req,res)=>{
    Student.findById(req.params.id)
    .then(student=>student.remove().then(()=>res.json({success:true}))
    )
    .catch(err=>res.status(404).json({success:false}));
    });

module.exports=router;