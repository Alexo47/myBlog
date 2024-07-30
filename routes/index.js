import express from 'express';

const router = express.Router();

let posts = []; // This can be moved to a more appropriate place later

router.get('/', (req, res) => {
  res.render('index', { posts });
});

export default router;
