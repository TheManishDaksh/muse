import React from 'react'
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  id : string;
  description: string;
  author: {
    name : string;
  };
  date: string;
}

const BlogCard = ({
  id,
  title,
  description,
  author,
  date
}:BlogCardProps) => {
  return (
    <Link to={'/blogs/:id'}>
      <div id={id} className="w-full overflow-hidden rounded-lg shadow-lg bg-white p-2 shadow-violet-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title || "title"}
        </h2>
        
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {description.slice(1,100)+"..." || "description"}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-2 overflow-hidden rounded-full font-bold bg-gray-300 text-black flex items-center justify-center">
              {author?.name?.length >0 ? author.name[0].toUpperCase() : "M"}
            </div>
            <span className="text-sm font-medium text-gray-700">{author.name || "Anonymous"}</span>
          </div>
          <span className="text-xs text-gray-500">{date || "date"}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;