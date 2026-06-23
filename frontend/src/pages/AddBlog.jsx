import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/blogs.css';

function AddBlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', category: '', desc: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Title se URL slug banana (e.g., "My New Blog" -> "my-new-blog")
    const slug = formData.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
    
    const newPost = {
      slug: slug,
      title: formData.title,
      category: formData.category,
      desc: formData.desc,
      content: formData.content, 
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    try {
      // Backend ke endpoint par POST request bhejna
    const response = await fetch('http://localhost:5001/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        // Backend par save hone ke baad list page par redirect
        navigate('/blogs');
      } else {
        console.error("Failed to save blog to backend");
        alert("Failed to publish blog. Please check backend server.");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Error: Backend server is not running.");
    }
  };

  return (
    <div className="add-blog-page">
      <div className="add-blog-card">
        
        <div className="add-blog-header">
          <h2>Add a New Blog</h2>
          <p>Share your travel tips and guides.</p>
        </div>

        <form className="add-blog-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Blog Title</label>
            <input type="text" name="title" placeholder="e.g., Ultimate Paris Guide" required onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" placeholder="e.g., Guides, Tips" required onChange={handleChange} />
          </div>
          
          <div className="form-group">
            <label>Short Description</label>
            <textarea name="desc" placeholder="Brief summary for the blog card..." required onChange={handleChange} rows="3" />
          </div>
          
          <div className="form-group">
            <label>Full Content</label>
            <textarea name="content" placeholder="Write your full blog post here..." required onChange={handleChange} rows="6" />
          </div>
          
          <button type="submit" className="nav-btn publish-btn">
            Publish Blog
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default AddBlog;