import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import './BlogPage.css';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/blogs');
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
  
      fetchBlogs();
    }, []);
    return (
        <div className="blog-page">
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      );
    };
    
    export default BlogPage;