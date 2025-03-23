
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-6 text-slate-500 text-sm md:text-base"
    >
      <hr className="border-slate-200 dark:border-slate-700" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-4">
          {/* Brand and Copyright */}
          <div className="space-y-2">
            <div className="mb-1">
              <span className="font-bold text-lg bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Muse
              </span> 
              <span className="ml-1">- create your own story</span>
            </div>
            <div className="text-xs text-slate-400">© 2025 All rights reserved</div>
          </div>
          
          {/* Developer and Social Links */}
          <div className="space-y-3">
            <div className="text-center md:text-right">
              <span>Developed by - </span>
              <span className="font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Manish
              </span> 
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-end"> 
              <a 
                href="https://github.com/TheManishDaksh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-slate-400 p-1 rounded-full cursor-pointer 
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-md 
                  hover:rotate-12"
                aria-label="GitHub"
              >
                <img src="/github.png" alt="GitHub" className="w-6 h-6"/>
              </a>

              <a 
                href="https://x.com/manish_dakshh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-slate-400 p-1 rounded-full bg-white cursor-pointer 
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-md 
                  hover:rotate-12"
                aria-label="Twitter/X"
              > 
                <img src="/twitter.png" alt="Twitter/X" className="w-6 h-6 rounded-full"/>
              </a>

              <a 
                href="https://www.linkedin.com/in/manish-kumar-262846252" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block border border-slate-400 p-1 rounded-full cursor-pointer 
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-md 
                  hover:rotate-12"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 rounded-full"/>
              </a>

              <a 
                href="mailto:manishk78265@gmail.com"
                className="block border border-slate-400 p-1 rounded-full cursor-pointer 
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-md 
                  hover:rotate-12"
                aria-label="Email"
              >
                <img src="/gmail.png" alt="Email" className="w-6 h-6"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer