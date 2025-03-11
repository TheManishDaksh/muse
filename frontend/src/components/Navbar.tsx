import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DrawIcon from '@mui/icons-material/Draw';

function Navbar() {
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
        <Link to={"/signup"}>
          <div>
            <button className="bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700 transition-all hover:scale-110 cursor-pointer text-sm">
              Signup
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Navbar;
