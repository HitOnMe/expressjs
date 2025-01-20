import { sequelize } from '../common/sequelize/init.sequelize.js'; // Đảm bảo đường dẫn đúng
import { DataTypes } from 'sequelize';

const like_res = sequelize.define('like_res', {
    id :{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    res_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_like: {
        type: DataTypes.DATE,
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
    }
}, {
    sequelize,          
    tableName: 'like_res', 
    timestamps: true      
})
like_res.sync()
.then(() =>
    console.log("Đồng bộ hóa like_res thành công")
).catch(() => console.log("Đồng bộ hóa like_res không thành công"))
export default like_res;
