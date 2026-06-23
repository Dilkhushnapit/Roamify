import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Blogs from "../pages/Blogs";
import BlogPost from "../pages/BlogPost";
import AddBlog from "../pages/AddBlog";
import EditBlog from "../pages/EditBlog";

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
      <Route path="/edit-blog/:slug" element={<EditBlog />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;