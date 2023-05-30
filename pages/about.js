import React from 'react'
import style from "../styles/About.module.css"
import Link from 'next/link'
const About = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-black mb-1">As a Web Developer</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">React,NodeJS,MongoDB,Docker,K8S</h1>
          <p className="leading-relaxed mb-3">I do work on that kind of techstack.Love to explore new tech tools.try to learn many new things continuously</p>
          <Link href="https://dulcet-brigadeiros-b04f49.netlify.app/" target="_blank">
          <a className="text-indigo-500 inline-flex items-center">My portfolio
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">As a CS student</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">DS,Algorithm,OS,Architechture,c/c++JS</h1>
          <p className="leading-relaxed mb-3">Have enough knowledge about this kind of topics.Learn more and more on these topics</p>
          <Link href="https://dulcet-brigadeiros-b04f49.netlify.app/" target="_blank" >
          <a className="text-indigo-500 inline-flex items-center">My portfolio
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Hobbies</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Music❤️,TechKnowledge,Ancient history,Financial knowledge,Cricket</h1>
          <p className="leading-relaxed mb-3">i love music 10000 and love playing cricket.</p>
          <Link href="https://dulcet-brigadeiros-b04f49.netlify.app/" target="_blank">
          <a className="text-indigo-500 inline-flex items-center">My Portfolio
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
          
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default About