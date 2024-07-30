import express from 'express';
import indexRoutes from './routes/index.js';
import postRoutes from './routes/posts.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
