const mongoose=require('mongoose');
require('dotenv').config();

//define the mongodb connection URL
//const mongoURL='mongodb://localhost:27017/First_Backend_project'
const mongoURL=process.env.DB_URL;
//set up the mongodb connection
mongoose.connect(mongoURL)

//get the default connection
//Mongoose maintains a default connection object representing the mongoDB connection.
const db=mongoose.connection;

//define event listeners for database connection


db.on('connected',()=>{
    console.log('Server abhi zinda hai');
});

db.on('disconnected',()=>{
    console.log('Gya server paani me');
});

db.on('error',(err)=>{
    console.log("sytem ne gadbad detect kiya hai",err);
});


//export the database connection
module.exports=db;