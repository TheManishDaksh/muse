import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <motion.div initial={{opacity : 0}} animate={{opacity:1}} transition={{duration:1}} 
   >
    <div className='flex justify-center'>
       <Link to={'/'}>     
        <div className='text-2xl font-bold cursor-pointer'>
            Muse
        </div>
        </Link>
        <Link to={'/signup'}>
        <div>
            <button className='bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700 transition-all hover:scale-110 cursor-pointer text-sm'>
                Signup
            </button>
        </div>
        </Link>
        </div>
    </motion.div>
  )
}

export default Navbar