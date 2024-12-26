const mongoose=require('mongoose');                    //sbse pehle mongoose ko declare krenge
const personschema =new mongoose.Schema({              //here we are creating schema in person
    name:{
        type:String,
        required:true
    }, 

      //Inside the personschema we are declaring different data field and their data type in which we wanted to take from the user.

    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['driver','technician','cameraman'],
        required:true
    },
    mobile:{
        type:Number,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

//
const person=mongoose.model('person',personschema);
module.exports=person;