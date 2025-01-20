import express from 'express';
import rootController from '../controllers/root.controller.js'
const resRooter = express.Router();
resRooter.get('/res', rootController('Restaurant','getObject'));
resRooter.get('/res/:id', rootController('Restaurant','getById'));
resRooter.post('/res', rootController('Restaurant','add'));
resRooter.put('/res/:id', rootController('Restaurant','update'));
resRooter.patch('/res/:id', rootController('Restaurant','update'));
resRooter.delete('/res/:id', rootController('Restaurant','deleteObject'));
export default resRooter