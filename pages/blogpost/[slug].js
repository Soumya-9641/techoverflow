import React ,{useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import styles1 from "../../styles/BlogPost.module.css";

import * as fs from "fs";
const slug = (props) => {
  const [blog,setBlog] = useState(props.myBlog);
 // const router = useRouter();
 // const {slug}=router.query;
  // useEffect(() => {
    
  
    
  // }, [router.isReady])
  
   
  return (<div>
    <main className={styles1.blog} >
    <h1>{blog && blog.title}</h1>
    <hr />
    <div className={styles1.content}>
     {blog && blog.content}
    </div>
    </main>
    </div>
  ); 
};
export async function getStaticPaths() {
  return {
    paths: [{ params:{slug: 'how-to-learn-react'}},
           { params:{slug:'how-to-learn-javascript'}},
           { params:{slug:'how-to-learn-next'}}
           ],
    fallback: true, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context) {
   
    const {slug}=context.params;
 
  // let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  // let myBlog = await data.json()
  
 let myBlog = await fs.promises.readFile(`../weblog/blogsdata/${slug}.json`, 'utf-8',(err,data)=>{
    console.log(req.query.slug)
    
    
  })
   return {
     props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
   }
 }

export default slug;