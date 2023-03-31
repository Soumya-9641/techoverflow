import connectDb from "../middlewares/mongoose";
import contact from "../models/contact"

const handler = async(req,res)=>{
    if(req.method=='POST'){
        console.log(req.body)
        const {fName,lName,email,city,password,zip,concern}= req.body;
        let u = new contact({fName,lName,email,city,password,zip,concern});
        await u.save();
        res.status(200).json({success:"success"})

    }else{
        res.status(400).json({error:"this method is not allowed"})
    }
}

export default connectDb(handler);