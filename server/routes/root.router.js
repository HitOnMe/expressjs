import express from 'express';
import userRooter from './user.rooter.js';
import resRooter from './res.rooter.js';
import orderRooter from './order.rooter.js';
import likeRes from './likeRes.rooter.js';
import unlike_res from './unlikeRes.rooter.js';
import rateRes from './rateRes.rooter.js';
const RootRooter = express.Router();
RootRooter.use(userRooter)
RootRooter.use(resRooter)
RootRooter.use(orderRooter);
RootRooter.use(likeRes)
RootRooter.use(unlike_res)
RootRooter.use(rateRes)
export default RootRooter