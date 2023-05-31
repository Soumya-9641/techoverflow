import connectDb from "../../middlewares/mongoose";
import createblog from "../../models/createblog"

const handler = async(req,res)=>{
    if(req.method=='POST'){
        console.log(req.body)
        const {author,tech,title,content}= req.body;
        let u = new createblog({author,
            tech,
            title,
            content});
        await u.save();
        res.status(200).json({success:"success"})

    }else{
        res.status(400).json({error:"this method is not allowed"})
    }
}

export default connectDb(handler);