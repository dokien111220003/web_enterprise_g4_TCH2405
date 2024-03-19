import React from 'react';
import './StudentPage.css';
import BlogImg1 from '../Assets/blogimg1.jpg'

const StudentPage = () => {
  // Dummy blog data
  const blogs = [
    { 
      id: 1, 
      title: 'Blog Post 1', 
      content: 'This is the content of blog post 1', 
      public: true,
      image: BlogImg1
    },
    { 
      id: 2, 
      title: 'Blog Post 2', 
      content: 'This is the content of blog post 2', 
      public: true,
      image: BlogImg1
    },
    { 
      id: 3, 
      title: 'Blog Post 3', 
      content: 'This is the content of blog post 3', 
      public: true,
      image: BlogImg1
    },
    { 
      id: 4, 
      title: 'Blog Post 4', 
      content: 'This is the content of blog post 4', 
      public: true,
      image: BlogImg1
    },
  ];

  // Split blogs into chunks of 2 for grid layout
  const chunkedBlogs = Array.from({ length: Math.ceil(blogs.length / 2) }, (_, index) =>
    blogs.slice(index * 2, index * 2 + 2)
  );
  
  return (
    <div className="content-student">
      <div className="blogs">
        {chunkedBlogs.map((chunk, index) => (
          <div key={index} className="blog-row">
            {chunk.map((blog) => (
              <div key={blog.id} className="blog">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-info">
                  <h2>{blog.title}</h2>
                  <p>{blog.content}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
