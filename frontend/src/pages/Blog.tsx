import React from 'react'
import { Navbar } from '../components'
import { FaCalendarAlt, FaUser } from 'react-icons/fa'

function Blog() {
  return (
    <div className="w-full min-h-screen bg-black">
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
                <span className="text-sm font-medium">Written by <span className="text-indigo-600 hover:underline cursor-pointer">{ "author"}</span></span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-indigo-600" />
                <span className="text-sm">March 19, 2025</span>
              </div>
            </div>
            
            {/* Blog title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              How to Build Beautiful User Interfaces with React and Tailwind CSS
            </h1>
            
            {/* Blog content */}
            <div className="prose prose-indigo max-w-none text-slate-700">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec ante vitae nulla tristique laoreet. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                Fusce eget mauris sed lectus pharetra ultrices.
              </p>
              
              <p className="mb-4">
                Nulla facilisi. Sed euismod, nisl eget tincidunt ultrices, nisl nisl aliquam nisl, 
                nec aliquam nisl nisl nec nisl. Sed euismod, nisl eget tincidunt ultrices, nisl nisl aliquam nisl, 
                nec aliquam nisl nisl nec nisl.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
              
              <ul className="list-disc pl-5 mb-6">
                <li className="mb-2">Understand the basics of React components</li>
                <li className="mb-2">Learn how to structure your Tailwind CSS classes</li>
                <li className="mb-2">Implement responsive design patterns</li>
                <li className="mb-2">Optimize your UI for performance</li>
              </ul>
              
              <p className="mb-4">
                Mauris sit amet diam ac sem interdum venenatis. Donec euismod, nisl eget tincidunt ultrices, 
                nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl eget tincidunt ultrices, 
                nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.
              </p>
            </div>
            
          </div>
        </article>
      </main>
    </div>
  )
}

export default Blog