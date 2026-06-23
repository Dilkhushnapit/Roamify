import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Blogs from '../pages/Blogs';
import BlogPost from "../pages/BlogPost";
import AddBlog from "../pages/AddBlog";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/privacy" element={<Privacy />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  );
}

export default AppRoutes;