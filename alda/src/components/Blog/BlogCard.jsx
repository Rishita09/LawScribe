import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
    return (
      <div className="blog-card">
        <img src={blog.imageURL} alt={blog.title} className="blog-image" />
        <h3>{blog.title}</h3>
        <a href={blog.readMoreLink} target="_blank" rel="noopener noreferrer" className="read-more-link">
          Read More
        </a>
      </div>
    );
  };
  
  export default BlogCard;