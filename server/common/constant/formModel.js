// models/models.js
import initModel from '../../models/init.model.js'

// Khởi tạo các model
const { likeRes, rateRes, Restaurant, user, order, unlike_res } = initModel();

// Định nghĩa object chứa model
const models = {
  likeRes,
  rateRes,
  Restaurant,
  user,
  order,
  unlike_res,
};

export default models;
