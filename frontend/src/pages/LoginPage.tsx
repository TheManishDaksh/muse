import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Input } from '../components'
import axios from 'axios'
import { toast } from 'react-toastify'

function LoginPage() {

const [username, setUsername] = useState<string>("")
const [password, setPassword] = useState<string>("")
const navigate = useNavigate()

async function handleLogin(event:React.FormEvent){
  event.preventDefault();
  try{
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,{
      username,
      password
    })
    if(!response){
      toast.error("incorrect credentials")
    }
    const token = response.data.token
    const userId = response.data.userId
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    if(!token){
      toast.error("can't login")
    }
    toast.success("User Login Successfully!")
    navigate('/blogs')    
  }catch(error:any){
    toast.error(error.response.data.message)
  }
}

  return (
    <div className="h-full md:h-[100vh] bg-gray-900 text-white p-6 flex items-center justify-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full max-w-5xl"
  >
    <div className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
      <form onSubmit={handleLogin}
      className="w-full md:w-1/2 p-8">
        <div className="space-y-6">
          <div className="text-2xl font-bold md:text-3xl mb-2">
            Welcome Back
          </div>
          
          <div className="mb-6">
            <span className="text-slate-400">Don't have an account? </span>
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
              <u>Signup</u>
            </Link>
          </div>
          
          <div className="space-y-4">

            <div>
              <p className="mb-1 font-medium">Email</p>
              <Input placeholder="Enter your email" type='text'
                value={username} onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            
            <div>
              <p className="mb-1 font-medium">Password</p>
              <Input placeholder="Enter your password"  type='password'
                value={password} onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            
            <button type='submit' onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors mt-4 font-medium cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </form>
      
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-800 to-purple-900 p-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Platform</h2>
          <p className="text-lg text-blue-100">Join thousands of users and start your journey today.</p>
        </div>
      </div>
    </div>
  </motion.div>
</div>
)
}

export default LoginPage