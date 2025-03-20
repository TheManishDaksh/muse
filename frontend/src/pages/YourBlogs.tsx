import React, { useEffect, useState } from 'react';
import {motion} from "motion/react"
import { BlogCard, BlogSkeleton, Navbar } from '../components'
import axios from 'axios';

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
                    alert("blogs not found")
                }
                const data = response?.data?.blogs.filter((blog:Blog)=>blog.authorId == userId)
                setBlogs(data)
                const userName = data[1].author.name
                setUsername(userName)
            }catch(error:any){
                alert(error.response.data.message)
            }
        }
        UserBlogs();
    },[])
  return (
    <div className='w-full min-h-screen'>
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
                <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                </div>
            )}
        </div>
    </motion.div>
    </div>
  )
}

export default YourBlogs