import express from 'express';
import userRooter from './user.rooter.js';
const RootRooter = express.Router();
RootRooter.use(userRooter)
export default RootRooter