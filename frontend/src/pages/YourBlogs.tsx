import React, { useEffect, useState } from 'react';
import {motion} from "motion/react"
import { BlogCard } from '../components'
import axios from 'axios';

function YourBlogs() {

    interface Blog{
        title: string;
        description: string;
        name: string;
        published: string;
    }

    const [blogs, setBlogs] = useState<Blog[]>([]) 
    const [author, setAuthor] = useState<string>("")
    const userId = localStorage.getItem("userId")
    useEffect( ()=>{
        async function UserBlogs(){
            try{
                const response:any = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk/${userId}`);
                if(!response){
                    alert("blogs not found")
                }
                const data = response.data
                const author = response.data.blogs.author
                setAuthor(author)
                setBlogs(data)
            }catch(error:any){
                alert(error.response.data.message)
            }
        }
        UserBlogs();
    },[])
  return (
    <div className='w-full h-screen'>
        <motion.div 
    initial = {{scale : 0}}
    animate = {{scale : 1}}
    transition={{duration:0.5}}
    > 
        <div>
            {blogs.map((blog)=> <BlogCard 
                title={blog.title}
                description={blog.description}
                author={author}
                date={blog.published}
            />)}
        </div>
    </motion.div>
    </div>
  )
}

export default YourBlogs