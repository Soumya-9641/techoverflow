import { handleClientScriptLoad } from "next/script";
import React, { useEffect, useState } from "react";
import style from "../styles/Blog.module.css"
import createblog from "./models/createblog"
import mongoose from 'mongoose';
import blogs from "./api/blogs.js";
import * as fs from "fs";
import InfiniteScroll from 'react-infinite-scroll-component';
const Blog =({blogs}) => {
  //console.log(props)
  //const [blogs,setBlogs] = useState([props.data]);
 //const [userdata, setUserdata] = useState()
//   try{
//     const res = await fetch("http://localhost:3000/api/blogs",{
//       method:"GET", 
//       headers:{
//         Accept:"application/json",
//         "Content-Type" : "application/json"
//       },
//       credentials:"include"
//     })
//     const data = await res.json();
//     setUserdata(data);
//     console.log(data);
//     if(!res.status===200){
//       const error = new Error(res.error)
//       throw error;
//     }
// }catch(err){
// console.log(err)
// //navigate("/login"); 
// }
console.log(blogs)
  
  return (
    <div className={style.container}>
       <main className={style.main}>
      <div className={style.grid}>
    {blogs && blogs.map((BlogItem)=>{
  
      return <a key={BlogItem._id} href={`/blogpost/${BlogItem._id}`} className={style.card}>
        <h2>{BlogItem.title} &rarr;</h2>
        
        <p>{BlogItem.content.substr(0,100)}</p>
      </a>
    })}
    </div>  
  </main>

    </div>
  )
}
export async function getServerSideProps(context) {
  
  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://localhost:27017/blogspot")
  }
  let blogs = await createblog.find()
  //console.log(blogs)
  return {
    props: {blogs:JSON.parse(JSON.stringify(blogs))}, // will be passed to the page component as props
  }
}

export default Blog