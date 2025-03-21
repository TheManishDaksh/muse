import React, {useEffect, useState} from 'react'
import {toast} from "react-toastify"
import axios from 'axios';
import { BlogCard, Navbar, BlogSkeleton } from '../components'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom';

function BlogsPage() {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  interface Blog {
    id: string;
    authorId : string;
    title: string;
    content: string;
    author: {
      name : string
    }
    published: string;
  }

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
                if(!token){
                  navigate('/signup')
                }
                  const response:any = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`,
                    {
                      headers : {
                        Authorization : token
                      }
                    }
                  );
                  if(!response){
                      toast.error("blogs not found")
                  }
                  const data = response.data?.blogs
                  setBlogs(data);

              }catch(error:any){
                  toast.error(error.response.data.message)
              }
          }
          UserBlogs();
      },[])
  return (
    <div className='max-w-full min-h-screen '
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
                 {blogs.length > 0 ?( blogs.map((blog)=> <BlogCard
                                key={blog.id} 
                                id={blog.id}
                                authorId={blog.authorId}
                                title={blog.title}
                                description={blog.content}
                                author={{name : blog.author.name}}
                                date={formatDate(blog.published)}
                            />)) : (
                              <div>
                                <BlogSkeleton/>
                              <BlogSkeleton/>
                              <BlogSkeleton/>
                              <BlogSkeleton/>
                              </div>
                            )
                            }
            </div>
        </motion.div>
    </div>
  )
}

export default BlogsPage