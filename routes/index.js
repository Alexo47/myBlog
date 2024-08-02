import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { posts: req.posts });
});

export default router;

