import express from 'express';
import rootController from '../controllers/root.controller.js'
const likeRes = express.Router();
likeRes.get('/likeRes', rootController('likeRes','getObject'));
likeRes.get('/likeRes/:id', rootController('likeRes','getById'));
likeRes.post('/likeRes', rootController('likeRes','add'));
likeRes.put('/likeRes/:id', rootController('likeRes','update'));
likeRes.patch('/likeRes/:id', rootController('likeRes','update'));
likeRes.delete('/likeRes/:id', rootController('likeRes','deleteObject'));
export default likeRes