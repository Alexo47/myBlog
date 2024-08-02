import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsFilePath = path.join(__dirname, "../data/posts.json");

const getPosts = (req, res) => {
    res.render("index", { posts: req.posts });
};

const newPostForm = (req, res) => {
    res.render("newPost");
};

const createPost = (req, res) => {
    const newPost = {
        title: req.body.title,
        author: req.body.author,
        date: new Date().toISOString().split('T')[0],
        summary: req.body.summary,
        tags: req.body.tags.split(',').map(tag => tag.trim()),
        content: req.body.content
    };

    req.posts.push(newPost);

    fs.writeFile(postsFilePath, JSON.stringify(req.posts, null, 2), (err) => {
        if (err) {
            console.error("Error writing to posts file:", err);
        }
    });

    res.redirect("/");
};

// Placeholder functions for edit, update, and delete
const editPostForm = (req, res) => {
    res.send("Edit post form - to be implemented");
};

const updatePost = (req, res) => {
    res.send("Update post - to be implemented");
};

const deletePost = (req, res) => {
    res.send("Delete post - to be implemented");
};

export {
    getPosts,
    newPostForm,
    createPost,
    editPostForm,
    updatePost,
    deletePost
};

