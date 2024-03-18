import React from 'react';
import './StudentPage.css'; // Bạn cần tạo tệp CSS này để áp dụng các style


const StudentPage = () => {
  // Dữ liệu blog giả định
  const blogs = [
    { 
      id: 1, 
      title: 'Blog Post 1', 
      content: 'This is the content of blog post 1', 
      public: true,
      image: '../Assets/slider1.jpg', // Đường dẫn ảnh cho blog post 1
    },
    { 
      id: 2, 
      title: 'Blog Post 2', 
      content: 'This is the content of blog post 2', 
      public: true,
      image: '../Assets/slider2.jpg', // Đường dẫn ảnh cho blog post 2
    },
    // Thêm các blog khác theo cùng cấu trúc
  ];
  

  return (
<div className="student-page">
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
