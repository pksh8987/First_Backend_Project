const mongoose=require('mongoose');

//define the mongodb connection URL
const mongoURL='mongodb://localhost:27017/First_Backend_project'
//set up the mongodb connection
mongoose.connect(mongoURL)

//get the default connection
//Mongoose maintains a default connection object representing the mongoDB connection.
const db=mongoose.connection;

//define event listeners for database connection


db.on('connected',()=>{
    console.log('server is connected');
});

db.on('disconnected',()=>{
    console.log('server is disconnected');
});

db.on('error',(err)=>{
    console.log("the system has detected some errors",err);
});


//export the database connection
module.exports=db;