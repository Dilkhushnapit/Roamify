import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/blogs.css';

function EditBlog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', category: '', desc: '', content: '' });

  // Puraana data fetch karke form mein bharne ke liye
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({ title: data.title, category: data.category, desc: data.desc, content: data.content });
        }
      } catch (error) {
        console.error("Error fetching blog for edit:", error);
      }
    };
    fetchBlogData();
  }, [slug]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/api/blogs/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Blog updated successfully!");
        navigate(`/blog/${slug}`); // Update hone ke baad wapas usi blog par bhej do
      } else {
        alert("Failed to update blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Server error.");
    }
  };

  return (
    <div className="add-blog-page">
      <div className="add-blog-card">
        <div className="add-blog-header">
          <h2>Edit Blog</h2>
        </div>
        <form className="add-blog-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blog Title</label>
            <input type="text" name="title" value={formData.title} required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={formData.category} required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Short Description</label>
            <textarea name="desc" value={formData.desc} required onChange={handleChange} rows="3" />
          </div>
          <div className="form-group">
            <label>Full Content</label>
            <textarea name="content" value={formData.content} required onChange={handleChange} rows="6" />
          </div>
          <button type="submit" className="nav-btn publish-btn">Update Blog</button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;