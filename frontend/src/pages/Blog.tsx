import { useEffect, useState } from 'react'
import { Navbar } from '../components'
import { FaCalendarAlt, FaUser } from 'react-icons/fa'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Blog() {

  const {id} = useParams()
  const [blog, setBlog] = useState<Blog | null >(null)
  const token = localStorage.getItem("token")
  interface Blog{
    title: string;
    content: string;
    author : {
        name : string;
    };
    published: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(date.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
};
useEffect(()=>{
  async function fetchBlog(){
   try{
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`,{
      headers : {
        Authorization : token
      }
    })
    if(!response.data){
      toast.error("can't find blog ")
    }
    setBlog(response.data.blogs[0])  
  }catch(error:any){
    toast.error(error?.response?.data.message)
  } 
   }
  fetchBlog();
},[])
  return (
    <div className="w-full min-h-screen bg-black"
    style={{
      backgroundImage: "radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.3) 0.5px, transparent 0)",
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat",
    }}
    >
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 bg-gray-200 relative">
            <img 
              src="/poster.webp" 
              alt="Blog featured image" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8">
            {/* Blog meta info */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 text-gray-600">
              <div className="flex items-center mb-2 sm:mb-0">
                <FaUser className="mr-2 text-indigo-600" />
                <span className="text-sm font-medium">Written by <span className="text-indigo-600 hover:underline cursor-pointer">{ blog?.author?.name || "Anonymous"}</span></span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-indigo-600" />
                <span className="text-sm">{blog?.published ? formatDate(blog?.published) : "date"}</span>
              </div>
            </div>
            
            {/* Blog title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {blog?.title || "title of blog"}
            </h1>
            
            {/* Blog content */}
            <div className="prose prose-indigo max-w-none text-slate-700">
              <p className="mb-4">
                {blog?.content || "content of blog"}
              </p>
            </div>
  
          </div>
        </article>
      </main>
    </div>
  )
}

export default Blog