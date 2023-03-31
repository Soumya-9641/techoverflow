// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function blogs(req, res) {
  let data = await fs.promises.readdir("../weblog/blogsdata")
  let myfile
 let allblogs =[];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
       myfile =await  fs.promises.readFile(("../weblog/blogsdata/"+item),"utf-8")
      console.log(myfile);
      allblogs.push(JSON.parse(myfile))
    }
  
    // fs.readFile(("../weblog/blogsdata"+item),(d)=>{
    //   allBlogs.push(d);
    // })

  res.status(200).json(allblogs)

  // fs.readdir("../weblog/blogsdata",(err,data)=>{
  //   if(err){
  //     console.log(err)
  //   }else{
  //     console.log(data)
  //     res.status(200).json((data))
  //   }
  // })
  
}
