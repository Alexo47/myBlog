import express from "express";
import { newPostForm, createPost, editPostForm, updatePost, deletePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/new', newPostForm);
router.post('/new', createPost);
router.get('/edit/:id', editPostForm);
router.post('/edit/:id', updatePost);
router.post('/delete/:id', deletePost);

export default router;
