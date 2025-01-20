import express from 'express';
import rootController from '../controllers/root.controller.js'
const unlike_res = express.Router();
unlike_res.get('/unlike_res', rootController('unlike_res','getObject'));
unlike_res.get('/unlike_res/:id', rootController('unlike_res', 'getById'));
unlike_res.post('/unlike_res', rootController('unlike_res', 'add'));
unlike_res.put('/unlike_res/:id', rootController('unlike_res', 'update'));
unlike_res.patch('/unlike_res/:id', rootController('unlike_res', 'update'));
unlike_res.delete('/unlike_res/:id', rootController('unlike_res', 'deleteObject'));
export default unlike_res