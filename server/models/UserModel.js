import {sequelize} from '../common/sequelize/init.sequelize.js'
import { DataTypes } from 'sequelize'
const user = sequelize.define('user', {
    id : {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    full_name : {
        type: DataTypes.STRING,
        allowNull:true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
   }, {
    sequelize,
    tableName: 'users',
    timestamps: true
   }
)
user.sync()
.then(() =>
    console.log("Đồng bộ hóa thành công")
).catch(() => console.log("Đồng bộ hóa không thành công"))
export default user