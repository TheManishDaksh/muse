import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from "motion/react"
import { BlogCard, BlogSkeleton, Navbar } from '../components'
import axios from 'axios';
import { toast } from 'react-toastify';

function YourBlogs() {

    interface Blog{
        id : string;
        authorId : string;
        title: string;
        content: string;
        author : {
            name : string
        };
        published: string;
    }

    const [blogs, setBlogs] = useState<Blog[]>([])
    const [userName, setUsername] = useState<string>("") 
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const year = String(date.getFullYear()).slice(-2);
        return `${day}-${month}-${year}`;
      };
    useEffect( ()=>{
        async function UserBlogs(){
            try{
                const response:any = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`,{
                    headers : {
                        Authorization : token
                    }
                });
                if(!response){
                    toast.error("blogs not found")
                }
                const data = await response?.data?.blogs.filter((blog:Blog)=>blog.authorId == userId)
                setBlogs(data)
                const userName = data[1].author.name
                setUsername(userName)
            }catch(error:any){
                toast.error(error.response.data.message)
            }
        }
        UserBlogs();
    },[])
  return (
    <div className='w-full min-h-screen'
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
    className='py-4'
    >   
        <div>
            <p className='text-lg font-bold pb-2 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>{`Happy to see You ${userName}`}</p>
            {blogs.length > 0 ? (
                blogs.map((blog)=> <div className='py-2' key={blog.id}>
                    <BlogCard 
                id={blog.id}
                authorId={blog.authorId}
                title={blog.title}
                description={blog.content}
                author={{name : blog.author.name}}
                date={formatDate(blog.published)}
            />
                </div> )
            ):(
                <div className='flex flex-col gap-3 justify-center items-center p-4'>
                    <div className='text-lg font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>No Blogs Found</div>
                    <div>
                    <Link to={'/createblog'}>
              <button className="gap-2 items-center 'text-violet-100 border-2 border-violet-500 flex  text-center  rounded-2xl w-full bg-gradient-to-r from-red-500 to-blue-500 py-1 px-1 transition-all duration-300 hover:scale-105 cursor-pointer ">
                <span><img src="/plus.png" alt="createNew" className="w-8" /></span>
                <span className="hidden md:block">CreateBlog</span>
                </button>
                </Link>
                </div> 
                </div>
            )}
        </div>
    </motion.div>
    </div>
  )
}

export default YourBlogs