/* const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;
const { Sequelize, DataTypes } = require('sequelize');
const { HOST, USER, PASSWORD, DB, dialect } = require('./config');

// khởi tạo sequelize
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect,
});

// đồng bộ bảng dữ liệu
const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Định nghĩa Models
const User = sequelize.define('User', {
  full_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Restaurant = sequelize.define('Restaurant', {
  res_name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
  desc: { type: DataTypes.STRING },
});

const LikeRes = sequelize.define('LikeRes', {
  date_like: { type: DataTypes.DATE, allowNull: false },
});

const RateRes = sequelize.define('RateRes', {
  amount: { type: DataTypes.INTEGER, allowNull: false },
  date_rate: { type: DataTypes.DATE, allowNull: false },
});

const Order = sequelize.define('Order', {
  amount: { type: DataTypes.INTEGER, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false },
  arr_sub_id: { type: DataTypes.STRING },
});

// Định nghĩa mối quan hệ
User.hasMany(LikeRes); //Một người dùng (User) có thể thích nhiều nhà hàng (LikeRes).
Restaurant.hasMany(LikeRes);//Một nhà hàng (Restaurant) có thể được nhiều người dùng thích (LikeRes).
LikeRes.belongsTo(User);// Một lượt thích (LikeRes) thuộc về một người dùng (User).
LikeRes.belongsTo(Restaurant);//Một lượt thích (LikeRes) thuộc về một nhà hàng (Restaurant).


User.hasMany(RateRes);//Tương tự
Restaurant.hasMany(RateRes);
RateRes.belongsTo(User);
RateRes.belongsTo(Restaurant);

User.hasMany(Order);
Order.belongsTo(User);

// Sync Models
const syncModels = async () => {
  await sequelize.sync({ alter: true });
  console.log('Models synchronized');
};

// API Endpoints

// Like/Unlike nhà hàng
app.post('/like/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const { userId } = req.body;
  try {
    const existingLike = await LikeRes.findOne({ where: { userId, restaurantId } });
    if (existingLike) {
      await existingLike.destroy();
      return res.status(200).json({ message: 'Restaurant unliked' });
    }
    await LikeRes.create({ userId, restaurantId, date_like: new Date() });
    res.status(201).json({ message: 'Restaurant liked' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// lấy like nhà hàng
app.get('/likes', async (req, res) => {
  const { restaurantId, userId } = req.query;
  try {
    const whereClause = {};
    if (restaurantId) whereClause.restaurantId = restaurantId;
    if (userId) whereClause.userId = userId;

    const likes = await LikeRes.findAll({ where: whereClause, include: [User, Restaurant] });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// thêm rate nhà hàng
app.post('/rate/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const { userId, amount } = req.body;
  try {
    await RateRes.create({ userId, restaurantId, amount, date_rate: new Date() });
    res.status(201).json({ message: 'Rating added' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// thêm order bởi user
app.post('/order', async (req, res) => {
  const { userId, amount, code, arr_sub_id } = req.body;
  try {
    await Order.create({ userId, amount, code, arr_sub_id });
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Lấy danh sách đánh giá theo người dùng và nhà hàng
app.get('/ratings', async (req, res) => {
  const { userId, restaurantId } = req.query; 
  try {
    const whereClause = {};
    if (userId) whereClause.userId = userId;
    if (restaurantId) whereClause.restaurantId = restaurantId;

    const ratings = await RateRes.findAll({
      where: whereClause,
      include: [User, Restaurant],
    });
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const startServer = async () => {
  await connectDatabase();
  await syncModels();
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer();
 */
import express from 'express';
import RootRooter from './routes/root.Router.js';

const app = express();
app.use(express.json());
app.use(RootRooter);
app.listen(5000, () => {
  console.log('connected success')
})