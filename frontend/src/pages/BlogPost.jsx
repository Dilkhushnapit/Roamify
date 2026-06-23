import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/blogpost.css';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching single blog:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${slug}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert("Blog deleted successfully!");
          navigate('/blogs');
        } else {
          alert("Failed to delete blog.");
        }
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Server error.");
      }
    }
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '100px' }}><h2>Loading...</h2></div>;
  if (error || !post) {
    return (
      <div className="blog-post-container" style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Blog post not found!</h2>
        <Link to="/blogs" className="back-link">Return to All Blogs</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <Link to="/blogs" className="back-link">← Back to Blogs</Link>
      
      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          <span>{post.category}</span> • <span>{post.date}</span>
        </div>
        
        {/* NAYA: Edit aur Delete Buttons */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => navigate(`/edit-blog/${post.slug}`)} 
            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#f0ad4e', color: 'white', border: 'none', borderRadius: '4px' }}>
            Edit
          </button>
          <button 
            onClick={handleDelete} 
            style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#d9534f', color: 'white', border: 'none', borderRadius: '4px' }}>
            Delete
          </button>
        </div>
      </div>

      <div className="blog-post-body">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;