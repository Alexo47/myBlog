import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";
import indexRoutes from "./routes/index.js";
import postRoutes from "./routes/posts.js";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Read posts from JSON file
const postsFilePath = path.join(__dirname, "data/posts.json");
let posts = [];

fs.readFile(postsFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading posts file:", err);
    } else {
        try {
            posts = JSON.parse(data);
        } catch (e) {
            console.error("Error parsing posts file:", e);
        }
    }
});

// Make posts available in req object
app.use((req, res, next) => {
    req.posts = posts;
    next();
});

// Routes
app.use("/", indexRoutes);
app.use("/posts", postRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
