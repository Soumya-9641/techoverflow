import React ,{useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import styles1 from "../../styles/BlogPost.module.css";
import createblog from "../models/createblog"
import mongoose from 'mongoose';
import * as fs from "fs";
import { AiOutlineHeart } from 'react-icons/ai';

const slug = ({Blog}) => {
  console.log(Blog)
  const [like, setLike] = useState(0)
  const handleClick=(e)=>{
      setLike(++like);
  }
  
   
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <h2 className="sm:text-3xl text-2xl text-gray-400 font-medium title-font mt-8 md:w-1/4">{Blog.title}</h2>
    
    {/* <div className="md:w-3/5 md:pl-6">
      <p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
      <div className="flex md:mt-4 mt-6">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <a className="text-indigo-500 inline-flex items-center ml-4">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div> */}
    
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-400">Content</h1>
      <p className="leading-relaxed text-base text-white">{Blog.content}.</p>
     
    </div>
    <div className='flex flex-col xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
    <div className="">
        <h2 className="text-lg sm:text-xl text-gray-400 font-medium title-font mb-2">Author</h2>
        <p className="leading-relaxed text-white text-base mb-4">{Blog.author}.</p>
        <AiOutlineHeart onClick={handleClick} className='cursor-pointer bg-red-500 rounded-xl'/>
        <p>{like}</p>
      </div>
      <div className="">
        <h2 className="text-lg sm:text-xl text-gray-400 font-medium title-font mb-2">TechStack</h2>
        <p className="leading-relaxed text-white text-base mb-4">{Blog.tech}</p>
        
      </div>
    </div>
    
      
</div>
  
</section>
    </>
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