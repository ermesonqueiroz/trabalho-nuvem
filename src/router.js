import { Router } from 'express';
import { user } from './services/user.js';
import { post } from './services/post.js';

export const router = Router();

router.get('/', async (req, res) => {
  const posts = await post.index();
  console.log(posts)
  res.render('index', { posts });
});

router.get('/posts/:id', async (req, res) => {
  const data = await post.getById(req.params.id);
  res.render('show', { post: data });
});

router.get('/users/:id', async (req, res) => {
  const data = await user.getById(req.params.id);
  res.render('show-user', { user: data });
});
