import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose"; // NAYA: Mongoose import kiya
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
// Yeh code database se connect karega. .env mein MONGO_URI nahi hai toh local MongoDB use karega.
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

// NAYA: Blog banane ke liye (POST)
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

// NAYA: Blogs fetch karne ke liye (GET)
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 }); // Naye blogs upar aayenge
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});