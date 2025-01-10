const express = require('express');
const app = express();
app.use(express.json())
const port = 5000;
const {Sequelize, DataTypes} = require("sequelize");
const {HOST, USER, PASSWORD, DB, dialect} = require('./config')

//Khởi tạo class squelize
const squelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: dialect
})

// Kết nối với bảng spql
const exercise2 = async() => {
  try {
    await squelize.authenticate()
    console.log("kết nối thành công")
  } catch(error) {
    console.error(error)
  }
}

//Hàm định nghĩa cột table trong sql
const defineFunction = (object) => {
  return squelize.define(object, {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arr_sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
}
//Hàm đồng bộ
const asyncModel = async(object) => {
  await defineFunction(object).sync({alter:true});
  console.log("Đã đồng bộ bảng order")
}

// Hàm thêm dữ liệu vào cột table
const submit = async(object, amount, arr_sub_id) =>{
  const createObject = await defineFunction(object).create({
    amount,
    arr_sub_id
  })
}

//Hàm lấy các giá trị trong bảng table
const getObject = async(object) => {
  const order = await defineFunction(object).findAll();
  console.log(JSON.stringify(order, null, 2))
}

//Hàm main
const main = async() => {
await exercise2()
await asyncModel(`order`)
await submit(`order`,1,4);
getObject(`order`)
}
main()


app.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});
app.get('/students/:id', (req, res) => {
    const params = req.params;
    res.send("lấy thông tin chi tiết học sinh có id là: " + params.id);
    console.log(params)
})
app.post('/students/:id', (req, res) => {
    const params = req.params;
    const body = req.body;
    console.log(body)
    console.log(params);
    res.send("thêm học sinh có id là: " + params.id)
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
