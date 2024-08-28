import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Create() {
  const [user,setuser]=useState({
    name:'',
    phone:'',
    email:''
  })
  // navigater
  const navigate= useNavigate()
  const handleform=(e)=>{
    e.preventDefault();
    if(!user.name || !user.email || !user.phone){
      alert('first fill detail')
      return
    }
    // console.log(user)
    axios.post('http://localhost:3000/user',user)
  .catch(err=>setuser(data.err))
  navigate('/read')

  };
  const handle=(e)=>{
    const {name,value}=e.target;
    setuser({...user, [name] : value})

  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Contact</h2>
        <form className="space-y-6" onSubmit={handleform}>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name='name'
              value={user.name}
              id="name"
              onChange={handle}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name='email'
              onChange={handle}
              value={user.email}
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              onChange={handle}
              name='phone'
              value={user.phone}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
            <Link
              to="/"
              className="bg-gray-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-600 transition duration-200"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
