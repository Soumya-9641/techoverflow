import React from 'react'
import style from "../styles/About.module.css"
import Link from 'next/link'
const About = () => {
  return (
    <div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">As a Web Developer</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">React,NodeJS,MongoDB,Docker,K8S</h1>
          <p class="leading-relaxed mb-3">I do work on that kind of techstack.Love to explore new tech tools.try to learn many new things continuously</p>
          <Link href="https://dulcet-brigadeiros-b04f49.netlify.app/" target="_blank">
          <a class="text-indigo-500 inline-flex items-center">My portfolio
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
          
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">As a CS student</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">DS,Algorithm,OS,Architechture,c/c++JS</h1>
          <p class="leading-relaxed mb-3">Have enough knowledge about this kind of topics.Learn more and more on these topics</p>
          <Link href="https://dulcet-brigadeiros-b04f49.netlify.app/" target="_blank" >
          <a class="text-indigo-500 inline-flex items-center">My portfolio
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
          
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Hobbies</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Music❤️,TechKnowledge,Ancient history,Financial knowledge,Cricket</h1>
          <p class="leading-relaxed mb-3">i love music 10000 and love playing cricket.</p>
          <Link href="https://dulcet-brigadeiros-b04f49.netlify.app/" target="_blank">
          <a class="text-indigo-500 inline-flex items-center">My Portfolio
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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