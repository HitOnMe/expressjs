import express from 'express';
import rootController from '../controllers/root.controller.js'
const resRooter = express.Router();
resRooter.get('/res', rootController('getRes'));
resRooter.get('/res/:id', rootController('getResById'));
resRooter.post('/res', rootController('addRes'));
resRooter.put('/res/:id', rootController('updateRes'));
resRooter.patch('/res/:id', rootController('updateRes'));
resRooter.delete('/res/:id', rootController('deleteRes'));
export default resRooter