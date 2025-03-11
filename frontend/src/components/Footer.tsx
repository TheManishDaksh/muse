import React from 'react'
import { motion } from 'framer-motion';

function Footer() {
  return (
         <motion.div 
            initial = {{scale : 0}}
            whileInView = {{scale : 1}}
            transition={{duration:1}}
         className='text-slate-500 text-sm md:text-base'>
          <hr/>
          <div className='flex flex-col justify-between md:flex-row gap-3 py-2'>
            <div>
            <div>
                <span className='font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>Muse</span> 
            <span>- create your own story</span></div>
            <div className='text-[12px] md:text-[13px]'>@all right reserved</div>
            </div>
            <div>
              <div>
              <span>Developed by -</span>
              <span className='font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>Manish</span> 
              </div>
              <div className='flex gap-4 py-4'> 
          <a 
            href="https://github.com/TheManishDaksh" 
            target="_blank" 
            rel="noopener noreferrer"
            className='block border-2 border-slate-500 p-1 rounded-full cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'
          >
            <img src="/github.png" alt="github" className='w-[50px] sm:w-[60px]'/>
          </a>

          <a 
            href="https://x.com/manish_dakshh" 
            target="_blank" 
            rel="noopener noreferrer"
            className='block border-2 border-slate-500 p-1 rounded-full bg-white cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'
          > 
            <img src="/twitter.png" alt="x" className='w-[50px] sm:w-[60px] rounded-[60%]'/>
          </a>

          <a 
            href="https://www.linkedin.com/in/manish-kumar-262846252" 
            target="_blank" 
            rel="noopener noreferrer"
            className='block border-2 border-slate-500 p-1 rounded-full cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'
          >
            <img src="/linkedin.png" alt="linkedIn" className='w-[50px] sm:w-[60px] rounded-full'/>
          </a>

          <div className='block border-2 border-slate-500 p-1 rounded-full cursor-pointer 
              transition-all duration-300 hover:-translate-y-4 shadow-2xl shadow-white 
              hover:rotate-90'>
          <button onClick={() => window.location.href = "mailto:manishk78265@gmail.com"}
         className=' py-2 px-2 text-lg cursor-pointer flex gap-2 '>
            <span><img src="/gmail.png" alt="manishk78625@gmail.com" width="45px" /></span> 
             </button>
          </div>
        </div>
            </div>
          </div>
        </motion.div>
  )
}

export default Footer