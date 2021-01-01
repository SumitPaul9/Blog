import express  from 'express';
import { getPost, createPost, updatePost, deletePost  } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/posts', getPost);
router.post('/posts/create', createPost);
router.patch('/posts/update/:id', updatePost);
router.delete('/posts/delete/:id', deletePost);


export default router;