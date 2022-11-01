// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`../weblog/blogsdata/${req.query.slug}.json`, 'utf-8',(err,data)=>{
    console.log(req.query.slug)
    if(err){
        
        res.status(500).json({"error":"Internal server error"})
      }else{
       
        res.status(200).json(JSON.parse(data))
      }
    
  })
   
}
