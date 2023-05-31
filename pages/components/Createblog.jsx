import React,{useState} from 'react'
import styles1 from "../../styles/contactfrom.module.css";
const 
Createblog = () => {
    const [author, setAuthor] = useState("")
    const [tech, setTech] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleChange =(e)=>{
            if(e.target.name =="author"){
                setAuthor(e.target.value)
                console.log(e.target.value)
            }
           else  if(e.target.name =="tech"){
                setTech(e.target.value)
                console.log(e.target.value)
            }
            else  if(e.target.name =="title"){
                setTitle(e.target.value)
                console.log(e.target.value)
            }
            else  if(e.target.name =="content"){
                setContent(e.target.value)
                console.log(e.target.value)
            }
            
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();

        const data = {author,tech,title,content}

        let res = await fetch('http://localhost:3000/api/createblog', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
    let response = await res.json();
    console.log(response) 


    }
  return (
    <div className={styles1.contactform}>
    <form onSubmit={handleSubmit} className="w-full max-w-lg" >
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  htmlFor="grid-first-name">
          Authir Name
        </label>
        <input name="author" type="author" value={author} onChange={handleChange}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  id="grid-first-name"  placeholder="enter your name"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Tech Stack
        </label>
        <input name="tech" type="tech" value={tech} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"  placeholder="enter which techstack"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
          Title
        </label>
        <input name="title" type="title" value={title} onChange={handleChange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="grid-email"  placeholder="enter the title"/>
        
      </div>
    </div>
    
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          Post The blog
        </label>
        <textarea name="content" type="content" value={content} onChange={handleChange} className="appearance-none block w-100% p-48 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  id="grid-city"  placeholder="write here" cols="80" rows="10"></textarea>
      </div>
      
      
      
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ml-32">
  Button
</button>
  </form>
  </div>
  )
}

export default 
Createblog