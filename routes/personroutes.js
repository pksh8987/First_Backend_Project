const express=require('express');
const router=express.Router();
const person=require('../person');



router.get('/',async(req,res)=>{
    try{
        const data= await person.find();
        console.log("Mil gya tera data");
        res.status(200).json(data);
    }
    catch(err){
        console.log('server me kuch andruni kharabi aa gyi hai');
        res.status(500).json({error:'server me kuch andruni kharabi aa gyi hai'});

    }
})
router.post('/',async (req,res)=>{
    try{
        const data=req.body
        const newperson= new person(data);
        const response=await newperson.save();
        console.log('Tumhara data ab mere paas hai');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'server me kuch andruni kharabi aa gyi hai'});
    }

})
router.get('/:worktype',async (req,res)=>{
    try{
        const worktype=req.params.worktype;
        {
            if(worktype =='driver' || worktype=='technician' || worktype=='cameraman'){
                const response= await person.find({work:worktype});
                console.log('Mil gya tera data');
                res.status(200).json(response);
            }
            else{
                console.log('shi worktype daalo balak');
            }
        }
    }
    catch(err){
            console.log('server me kuch andruni kharabi aa gyi hai');
            res.status(500).json(err);
        }

    






})
module.exports=router;