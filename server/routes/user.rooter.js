import express from 'express';
import rootController from '../controllers/root.controller.js'
const userRooter = express.Router();
userRooter.get('/user', rootController('user','getObject'));
userRooter.get('/user/:id', rootController('user', 'getById'));
userRooter.post('/user', rootController('user', 'add'));
userRooter.put('/user/:id', rootController('user', 'update'));
userRooter.patch('/user/:id', rootController('user', 'update'));
userRooter.delete('/user/:id', rootController('user', 'deleteObject'));
export default userRooter