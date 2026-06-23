import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/blogs.css';

function Blogs() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    // Hardcoded default blogs
    const defaultPosts = [
      { id: 'd1', slug: 'flight-hacks', title: "Top Flight Hacks for 2026", category: "Tips & Tricks", date: "June 20, 2026", desc: "Learn how to save money and get the best seats on your next booking." },
      { id: 'd2', slug: 'destinations', title: "Best Destinations in Europe", category: "Guides", date: "June 18, 2026", desc: "Explore the most top-rated places to visit this summer." },
      { id: 'd3', slug: 'travel-insurance', title: "Travel Insurance: Do You Need It?", category: "Advice", date: "June 15, 2026", desc: "A complete breakdown of travel insurance policies and why they matter." },
      { id: 'd4', slug: 'packing-tips', title: "Smart Packing Tips for Backpackers", category: "Tips & Tricks", date: "June 10, 2026", desc: "Pack light, travel easy. Here is the ultimate checklist for backpackers." },
      { id: 'd5', slug: 'airport-layovers', title: "Navigating Airport Layovers Like a Pro", category: "Guides", date: "June 5, 2026", desc: "Make the most out of your 5+ hour layovers with these simple hacks." },
      { id: 'd6', slug: 'travel-with-pets', title: "How to Travel with Pets Safely", category: "Advice", date: "June 1, 2026", desc: "Everything you need to know about flying with your furry friends." }
    ];

    const fetchBackendBlogs = async () => {
      try {
        // Backend se naye blogs lana
        const response = await fetch('http://localhost:5001/api/blogs');
        if (response.ok) {
          const backendPosts = await response.json();
          // Backend wale pehle dikhenge, uske baad default wale
          setAllBlogs([...backendPosts, ...defaultPosts]);
        } else {
          setAllBlogs(defaultPosts);
        }
      } catch (error) {
        console.error("Backend server error:", error);
        // Agar backend error de, toh kam se kam default blogs render ho jayein
        setAllBlogs(defaultPosts);
      }
    };

    fetchBackendBlogs();
  }, []);

  return (
    <div className="blogs-page">
      
      <div className="blogs-header" style={{ position: 'relative' }}>
        <h1>Roamify Travel Blog</h1>
        <p>Inspiration, advice, and tips for your next big adventure.</p>
        
        <Link 
          to="/add-blog" 
          className="nav-btn" 
          style={{ 
            position: 'absolute', 
            top: '30px', 
            right: '30px', 
            textDecoration: 'none'
          }}
        >
          + Add New Blog
        </Link>
      </div>

      <div className="blogs-grid container">
        {allBlogs.map((post) => (
          <div key={post._id || post.id} className="blog-card">
            
            <div className="blog-card-image">
              <span>✈️ Roamify</span>
            </div>
            
            <div className="blog-card-content">
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="blog-desc">{post.desc}</p>
              
              <div className="blog-meta">
                <span>{post.date}</span>
                <Link to={`/blog/${post.slug}`} className="read-more-btn" style={{ textDecoration: 'none' }}>
                  Read More
                </Link>
              </div>
              
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Blogs;