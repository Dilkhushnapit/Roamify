import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import flightRoutes from "./routes/flightRoutes.js";
import { env } from "./config/env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./.env") });
const app = express();

app.use(cors());
app.use(express.json());

// ==========================================
// MONGODB CONNECTION
// ==========================================
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/roamify";
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// ==========================================
// BLOG SCHEMA & MODEL
// ==========================================
const blogSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true }
});

const Blog = mongoose.model('Blog', blogSchema);

// ==========================================
// ROUTES & APIs
// ==========================================

// Purana Flight Route
app.use("/api/flights", flightRoutes);

// 1. Blog create karne ke liye (POST)
app.post('/api/blogs', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error saving blog:", error);
    res.status(500).json({ message: "Failed to save blog" });
  }
});

// 2. Saare blogs fetch karne ke liye (GET list)
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 }); // Naye blogs upar aayenge
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

// 3. Ek single blog fetch karne ke liye (GET by slug)
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching single blog:", error);
    res.status(500).json({ message: "Failed to fetch blog" });
  }
});

// 4. Blog update karne ke liye (PUT)
app.put('/api/blogs/:slug', async (req, res) => {
  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true } // Return updated document
    );
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Failed to update blog" });
  }
});

// 5. Blog delete karne ke liye (DELETE)
app.delete('/api/blogs/:slug', async (req, res) => {
  try {
    const deletedBlog = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});