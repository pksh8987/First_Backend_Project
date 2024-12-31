const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const person=require('./person');
app.get('/',function(req,res){
    console.log("Server is up");
    res.send("welcome to my first backend project");
})
const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);
const PORT=process.env.PORT  || 4400;
app.listen(PORT);