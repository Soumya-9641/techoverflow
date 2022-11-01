import { handleClientScriptLoad } from "next/script";
import React, { useEffect, useState } from "react";
import style from "../styles/Blog.module.css"
import hello from "./api/hello.js";
import * as fs from "fs";
import InfiniteScroll from 'react-infinite-scroll-component';
const Blog = (props) => {
  console.log(props)
  const [blogs,setBlogs] = useState(props.myprops);
  // const fetchData = () => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 1500);
  // };
  return (
    <div className={style.container}>
       <main className={style.main}>

        {/* <InfiniteScroll
         dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
           <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
           </p>
  } 
>
  <div className={style.grid}>
    {blogs.map((BlogItem)=>{
      return <a key={BlogItem.title} href={`/blogpost/${BlogItem.slug}`} className={style.card}>
        <h2>{BlogItem.title} &rarr;</h2>
        <p>{BlogItem.content.substr(0,100)}</p>
      </a>
    })}
 
    </div>
  {blogs}
   
</InfiniteScroll>  */}
    
    
      <div className={style.grid}>
    {blogs.map((BlogItem)=>{
      return <a key={BlogItem.title} href={`/blogpost/${BlogItem.slug}`} className={style.card}>
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
  
 let data = await fetch('http://localhost:3000/api/hello')
 let myprops = await data.json()
 
//  .then((a)=>{
//     return a.json();
//   })
//     .then((parsed)=>{
       
        
//       setBlogs(parsed)
//       })
  return {
    props: {myprops}, // will be passed to the page component as props
  }
}

export default Blog