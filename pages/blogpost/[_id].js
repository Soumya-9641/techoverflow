import React ,{useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import styles1 from "../../styles/BlogPost.module.css";
import createblog from "../models/createblog"
import mongoose from 'mongoose';
import * as fs from "fs";
const slug = ({Blog}) => {
  console.log(Blog)
 // const [blog,setBlog] = useState(props.myBlog);
 // const router = useRouter();
 // const {slug}=router.query;
  // useEffect(() => {
    
  
    
  // }, [router.isReady])
  
   
  return (<div>
    <main className={styles1.blog} >
    <h1>{Blog && Blog.title}</h1>
    <hr />
    <div className={styles1.content}>
     {Blog && Blog.content}
    </div>
    </main>
    </div>
  ); 
};
// export async function getStaticPaths() {
//   return {
//     paths: [{ params:{slug: 'how-to-learn-react'}},
//            { params:{slug:'how-to-learn-javascript'}},
//            { params:{slug:'how-to-learn-next'}}
//            ],
//     fallback: true, // can also be true or 'blocking'
//   }
// }
export async function getServerSideProps(context) {
   
  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://localhost:27017/blogspot")
  }
  let Blog = await createblog.findOne({_id:context.query._id})
  
  return {
    props: {Blog:JSON.parse(JSON.stringify(Blog))}, // will be passed to the page component as props
  }
 }

export default slug;