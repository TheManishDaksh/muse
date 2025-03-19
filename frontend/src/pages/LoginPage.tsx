import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Input } from '../components'
import { i } from 'motion/react-client'

function LoginPage() {
  return (
    <div className="h-full md:h-[100vh] bg-gray-900 text-white p-6 flex items-center justify-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full max-w-5xl"
  >
    <div className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
      <form className="w-full md:w-1/2 p-8">
        <div className="space-y-6">
          <div className="text-2xl font-bold md:text-3xl mb-2">
            Welcome Back
          </div>
          
          <div className="mb-6">
            <span className="text-slate-400">Don't have an account? </span>
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-colors">
              <u>Signup</u>
            </Link>
          </div>
          
          <div className="space-y-4">

            <div>
              <p className="mb-1 font-medium">Email</p>
              <Input placeholder="Enter your email" />
            </div>
            
            <div>
              <p className="mb-1 font-medium">Password</p>
              <Input placeholder="Enter your password"  />
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors mt-4 font-medium">
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