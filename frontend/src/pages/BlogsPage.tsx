import React from 'react'
import { BlogCard, Navbar } from '../components'
import { motion } from 'motion/react'

function BlogsPage() {
  return (
    <div className='max-w-full min-h-screen bg-black'
    style={{
      backgroundImage: "radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)",
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat",
    }}
    >
        <Navbar/>
        <motion.div 
             initial = {{scale : 0}}
             animate = {{scale : 1}}
             transition={{duration:0.5}}
        className='flex flex-col py-4'>
            <div className='text-sm text-slate-400 py-2 pb-8'>
                <p>For You</p>
                <hr />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <BlogCard/>
            </div>
        </motion.div>
    </div>
  )
}

export default BlogsPage