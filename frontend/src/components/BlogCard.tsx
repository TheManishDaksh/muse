import React from 'react'
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
}

const BlogCard = ({
  title,
  description,
  author,
  date
}:BlogCardProps) => {
  return (
    <Link to={'/blogs/:id'}>
      <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white p-2">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title || "title"}
        </h2>
        
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {description || "description"}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-2 overflow-hidden rounded-full bg-gray-300 text-black flex items-center justify-center">
              {"m"}
            </div>
            <span className="text-sm font-medium text-gray-700">{author || "a"}</span>
          </div>
          <span className="text-xs text-gray-500">{date || "date"}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;