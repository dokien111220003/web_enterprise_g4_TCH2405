import React from 'react';
import './StudentPage.css';


const StudentPage = () => {
  // Dữ liệu blog giả định
  const blogs = [
    { 
      id: 1, 
      title: 'Blog Post 1', 
      content: 'This is the content of blog post 1', 
      public: true,
      image: '../Assets/slider1.jpg', 
    },
    { 
      id: 2, 
      title: 'Blog Post 2', 
      content: 'This is the content of blog post 2', 
      public: true,
      image: '../Assets/slider2.jpg', 
    },
    
  ];
  

  return (
<div className="content-student">
  <div className="blogs">
    {blogs.filter(blog => blog.public).map((blog) => (
      <div key={blog.id} className="blog">
        <img src={blog.image} alt={blog.title} className="blog-image" />
        <div className="blog-info">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default StudentPage;
