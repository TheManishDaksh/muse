
import DrawIcon from '@mui/icons-material/Draw';
import EastIcon from '@mui/icons-material/East';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from "framer-motion"
import { Footer, Navbar } from '../components'
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate()
  function readPost(){
    navigate('/blogs')
  }
  return (
    <div className='max-w-full h-full bg-black'
    style={{
      backgroundImage: "radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)",
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat",
    }}
    > 
    {/* Home Page */}
        <div>
          <Navbar/>
        </div>
        <div className='py-10 md:py-20'>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}>
          <div className='flex flex-col justify-center items-center'>
            <div className='text-violet-100 border-2 border-violet-500 flex justify-center text-center  rounded-full w-70 bg-gradient-to-r from-red-500 to-blue-500 py-1 md:py-2'>
              <span className='text-blue-500 flex items-center justify-center'><DrawIcon/></span>
              <span>Muse - A blogging website</span>
            </div>
            <div className='pt-10 pb-2 text-3xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>
              <div>
                Write Your Thoughts,
              </div>
              <div className='flex items-center justify-center pt-3' > 
                Ideas & Stories
              </div>
            </div>
            <div className='text-blue-500 pb-4 pt-4 md:pt-0 flex items-center justify-center gap-2'>
              <span><AutoAwesomeIcon/></span>
              <span className='flex flex-col md:flex-row items-center justify-center'> 
                <span>You have countless stories and </span>
                  &nbsp;
                <span>memories let's share them</span>
              </span>
            </div>
            <div className='py-10'>
            <div className='bg-gradient-to-r from-red-500 to-blue-500 py-1 px-2 md:py-2 rounded-full border-2 border-violet-500 flex gap-2 font-bold cursor-pointer hover:scale-105 transition-all duration-300'>
              <span><button onClick={readPost}
               className='cursor-pointer'> Start Reading now </button></span>
              <span><EastIcon/></span>
            </div>
            </div>
            <div className=' flex flex-col  justify-center items-center bg-black w-full h-full'>
            <div><p className='font-bold text-3xl md:text-4xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent py-10'>Create Your Story</p></div>
            <motion.div
            initial = {{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:3}} 
            className='flex flex-col md:flex-row gap-4 py-5'>
            <div >
              <img className='hover:scale-105 transition-all  hover:duration-300 rounded-full shadow shadow-slate-500 hover:shadow-2xl' 
              src="/hero-img-01.jpg" alt="travelling" />
              </div>
            <div>
              <img className='hover:scale-105 transition-all  hover:duration-300 rounded-full shadow shadow-slate-500 hover:shadow-2xl'
              src="/hero-img-02.jpg" alt="professinal" />
              </div>
            <div>
              <img className='hover:scale-105 transition-all  hover:duration-300 rounded-full shadow shadow-slate-500 hover:shadow-2xl'
              src="/hero-img-03.jpg" alt="vacation" />
              </div>
            </motion.div>
          </div>
          </div>
          
        </motion.div>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage