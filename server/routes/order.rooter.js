import express from 'express';
import rootController from '../controllers/root.controller.js'
const orderRooter = express.Router();
orderRooter.get('/order', rootController('order','getObject'));
orderRooter.get('/order/:id', rootController('order','getById'));
//user đặt món
orderRooter.post('/order', rootController('order','add'));
orderRooter.put('/order/:id', rootController('order','update'));
orderRooter.patch('/order/:id', rootController('order','update'));
orderRooter.delete('/order/:id', rootController('order','deleteObject'));
export default orderRooter