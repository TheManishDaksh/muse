import React from "react";
import {toast} from "react-toastify"
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import DrawIcon from '@mui/icons-material/Draw';

function Navbar() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  function handleLogut(){
    try{
      localStorage.clear();
      navigate('/')
    }catch(error:any){
      toast.error(error?.response.data.message)
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between">
        <Link to={"/"}>
          <div className="text-2xl font-bold cursor-pointer flex flex-row items-center hover:scale-105 transition-all hover:duration-200">
            <span className="text-blue-500 flex items-center"><DrawIcon/></span>
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent ">Muse</span>
            </div>
        </Link>
        {token? (
          <div className="flex gap-2">
             <div>
              <Link to={'/createblog'}>
              <button className="gap-2 items-center 'text-violet-100 border-2 border-violet-500 flex  text-center  rounded-2xl w-full bg-gradient-to-r from-red-500 to-blue-500 py-1 px-1 transition-all duration-300 hover:scale-105 cursor-pointer ">
                <span><img src="/plus.png" alt="createNew" className="w-8" /></span>
                <span className="hidden md:block">CreateBlog</span>
                </button>
                </Link>
            </div>
            <div>
              <Link to={'/yourblogs'}>
              <button className="gap-2 items-center 'text-violet-100 border-2 border-violet-500 flex  text-center  rounded-2xl w-full bg-gradient-to-r from-red-500 to-blue-500 py-1 px-1 transition-all duration-300 hover:scale-105 cursor-pointer ">
                <span><img src="/newspaper.png" alt="your articles" className="w-8" /></span>
              <span className="hidden md:block">Your articles</span></button>
              </Link>
            </div>
            <div>
              <button onClick={handleLogut}
              className="gap-2 items-center 'text-violet-100 border-2 border-violet-500 flex  text-center  rounded-2xl w-full bg-gradient-to-r from-red-500 to-blue-500 py-1 px-1 transition-all duration-300 hover:scale-105 cursor-pointer ">
            <span><img src="/logout.png" alt="logout" className="w-8 " /></span>
            <span className="hidden md:block">Logout</span>
            </button></div>
          </div>
        ) : (
          <Link to={"/signup"}>
          <div>
            <button className="bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700 transition-all hover:scale-110 cursor-pointer text-sm">
              Signup
            </button>
          </div>
        </Link>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
