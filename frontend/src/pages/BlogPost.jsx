import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/blogpost.css';

function BlogPost() {
  // URL se 'slug' nikalna (jaise 'flight-hacks' ya 'destinations')
  const { slug } = useParams();

  // Dummy database: Har slug ke hisaab se poora blog content
  const blogContent = {
    'flight-hacks': {
      title: "Top Flight Hacks for 2026",
      date: "June 20, 2026",
      author: "Roamify Team",
      content: "Finding cheap flights doesn't have to be hard. Start by clearing your browser cookies or using incognito mode. Always compare prices across different dates. Booking on a Tuesday doesn't always guarantee the best price, but being flexible with your travel dates definitely will. Consider budget airlines, but watch out for hidden baggage fees!"
    },
    'destinations': {
      title: "Best Destinations to Visit in 2026",
      date: "June 18, 2026",
      author: "Travel Expert",
      content: "This year is all about off-the-beaten-path locations. Skip the crowded tourist traps and explore hidden gems in Eastern Europe, or take a peaceful retreat in the mountains of Southeast Asia. Wherever you go, make sure to immerse yourself in the local culture and try authentic street food."
    },
    'travel-insurance': {
      title: "Travel Insurance: A Complete Guide",
      date: "June 15, 2026",
      author: "Roamify Support",
      content: "Many travelers skip insurance to save money, but medical emergencies abroad can cost thousands. Always read the fine print to ensure coverage for lost baggage, flight cancellations, and medical evacuation. It's a small price to pay for peace of mind."
    },
    'packing-tips': {
      title: "Smart Packing Tips for Every Traveler",
      date: "June 10, 2026",
      author: "Roamify Team",
      content: "Rolling your clothes instead of folding them saves space and reduces wrinkles. Always pack a universal adapter and a power bank. Keep your essential documents, medications, and a spare change of clothes in your carry-on just in case your checked luggage gets delayed."
    }
  };

  // Agar URL mein koi aisi string aa jaye jo hamare data mein nahi hai
  const post = blogContent[slug];

  if (!post) {
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
          <span>By {post.author}</span> • <span>{post.date}</span>
        </div>
      </div>

      <div className="blog-post-body">
        {/* Real project mein yahan database se aaya HTML render hota hai */}
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;