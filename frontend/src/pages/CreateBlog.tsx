import React, { useState } from 'react'
import { Navbar } from '../components';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateBlog() {

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  async function handleCreatePost(event : React.FormEvent){
    event.preventDefault();
    try{
      console.log("key clicked");
      
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,{
        title,
        content
      },{
        headers : {
          Authorization : token
        }
      })
      console.log("blog created");
      
      if(!response){
        alert("blog can't created")
      }
      navigate(`/yourblogs`)
    }catch(error:any){
    alert(error?.response.data.message)
  }
}
  return (
        <div className="w-full min-h-screen bg-black pb-12 px-4 sm:px-6 lg:px-8">
        <Navbar/>
      < motion.div initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
       className="max-w-3xl mx-auto py-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-6 py-4">
            <h1 className="text-xl font-bold text-white">Create New Blog Post</h1>
          </div>
          
          <form onSubmit={handleCreatePost}
            className="p-6 space-y-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                type="text" 
                id="title"
                name="title"
                placeholder="Enter your blog title" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-black"
              />
            </div>
            
            {/* featured Image
            <div className="space-y-2">
              <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700">
                Featured Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo
                    </p>
                  </div>
                  <input type="file" className="opacity-0" />
                </label>
              </div>
            </div> */}
            
            {/* content  */}
            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea 
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                id="content"
                name="content"
                rows={10}
                placeholder="Write your blog content here..." 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-black"
              ></textarea>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center justify-end space-x-3 pt-4">
              <button
                onClick={handleCreatePost}
                type="submit"
                className="px-6 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default CreateBlog