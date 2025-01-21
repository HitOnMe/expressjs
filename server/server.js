
import express from 'express';
import RootRooter from './routes/root.Router.js';

const app = express();
app.use(express.json());
app.use(RootRooter);
app.listen(5000, () => {
  console.log('connected success')
})