import React, { useState } from 'react'
import styles1 from "../styles/contactfrom.module.css";


const Contact = () => {

    const [fName ,setFname] = useState('');
    const [lName ,setLname] = useState('');
    const [email ,setEmail] = useState('');
    const [city,setCity] = useState('');
    const [password,setPassword] = useState('');
    const [zip,setZip] = useState('');
    const [concern,setConcern] = useState('');
    const handleSubmit = async(e)=>{
      e.preventDefault();
      //console.log(fName,lName,email,city,password,zip,concern);
      const data = { fName,lName,email,city,password,zip,concern };

      let res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST', // or 'PUT'
       headers: {
      'Content-Type': 'application/json',
  },
      body: JSON.stringify(data),
})
let response = await res.json();
console.log(response) 

    }
    const handleChange= (e)=>{
     if(e.target.name=='firstname'){
      setFname(e.target.value);
     }
     else if(e.target.name=='lastname'){
      setLname(e.target.value);
     }
     else if(e.target.name=='email'){
      setEmail(e.target.value);
     }
     else if(e.target.name=='city'){
      setCity(e.target.value);
     }
     else if(e.target.name=='password'){
        setPassword(e.target.value);
     }
     else if(e.target.name=='zip'){
      setZip(e.target.value);
     }
     else if(e.target.name=='concern'){
      setConcern(e.target.value);
     }
     
     
     
     
    //console.log(e,"changed");
     }
  return (
    <div className={styles1.contactform}>
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
    
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  htmlFor="grid-first-name">
          First Name
        </label>
        <input  value={fName} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='firstname' id="grid-first-name"  placeholder="Jane"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input value={lName} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='lastname' id="grid-last-name"  placeholder="Doe"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
          E-Mail
        </label>
        <input  value={email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='email' id="grid-email"  placeholder="enter your e-mail"/>
        <p className="text-gray-600 text-xs italic">We will never share your email and password</p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Password
        </label>
        <input  value={password}  onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='password' id="grid-password"  placeholder="******************"/>
        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you had like</p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          City
        </label>
        <input  value={city} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='city' id="grid-city"  placeholder="Albuquerque"/>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          State
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="grid-state">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-concern">
          Your Concern
        </label>
        <textarea value={concern}  onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='concern' id="grid-concern"  placeholder="Jane"/>
        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
          Zip
        </label>
        <input value={zip}  onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='zip' id="grid-zip"  placeholder="90210"/>
      </div>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ml-32">
  Button
</button>
  </form>
  </div>
  )
}

export default Contact