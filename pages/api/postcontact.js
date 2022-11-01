import * as fs from "fs";


export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request - Example:
      console.log(req.body);
      let data = await fs.promises.readdir('contactdata');
      console.log(data);
      fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body),()=>{

      })
      res.status(200).json({name: "John Doe" })
    } else {
      // Handle any other HTTP method
      res.status(200).json(["allBlogs"])
    }
  }