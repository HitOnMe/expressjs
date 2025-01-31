import express from 'express';
import rootController from '../controllers/root.controller.js'
const rateRes = express.Router();
rateRes.get('/rateRes', rootController('rateRes','getObject'));
rateRes.get('/rateRes/:id', rootController('rateRes','getById'));
rateRes.post('/rateRes', rootController('rateRes','add'));
rateRes.put('/rateRes/:id', rootController('rateRes','update'));
rateRes.patch('/rateRes/:id', rootController('rateRes','update'));
rateRes.delete('/rateRes/:id', rootController('rateRes','deleteObject'));
//Lấy danh sách rate theo nhà hàng và user
rateRes.get('/user/:id/rateRes', rootController('user','getbyObjects','rateRes', 'user_id'));
rateRes.get('/res/:id/rateRes', rootController('Restaurant','getbyObjects','rateRes', 'res_id'));
export default rateRes