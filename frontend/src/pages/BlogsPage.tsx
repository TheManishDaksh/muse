import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { BlogCard, Navbar } from '../components'
import { motion } from 'motion/react'

function BlogsPage() {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const token = localStorage.getItem("token")
  interface Blog{
    title: string;
    content: string;
    author: string;
    date: string;
}
  useEffect( ()=>{
          async function UserBlogs(){
              try{
                  const response:any = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`,
                    {
                      headers : {
                        Authorization : token
                      }
                    }
                  );
                  console.log(response);
                  
                  if(!response){
                      alert("blogs not found")
                  }
                  const data = response.data.blogs
                  setBlogs(data)
              }catch(error:any){
                  alert(error.response.data.message)
              }
          }
          UserBlogs();
      },[])
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
                <p className='pb-2'>For You</p>
                <hr />
            </div>
            <div className='flex flex-col justify-center gap-3'>
                 {blogs.map((blog)=> <BlogCard 
                                title={blog.title}
                                description={blog.content}
                                author={blog.author}
                                date={blog.date}
                            />)}
            </div>
        </motion.div>
    </div>
  )
}

export default BlogsPage