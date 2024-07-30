let posts = [];

export const newPostForm = (req, res) => {
  res.render('new-post');
};

export const createPost = (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: posts.length + 1, title, content });
  res.redirect('/');
};

export const editPostForm = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('edit-post', { post });
};

export const updatePost = (req, res) => {
  const { title, content } = req.body;
  const post = posts.find(p => p.id == req.params.id);
  post.title = title;
  post.content = content;
  res.redirect('/');
};

export const deletePost = (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect('/');
};
