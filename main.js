const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const person=require('./person');
app.get('/',function(req,res){
    console.log("Server is up");
    res.send("welcome to my first backend project");
})
const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);
app.listen(4400);