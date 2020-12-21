const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const students=require('./routes/api/student');

const app=express();

//Bodyparser middle-ware
app.use(bodyParser.json());

//DB Config
const db=require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});

//use routes
app.use('/api/student',students);

const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`server started on port ${port}`));