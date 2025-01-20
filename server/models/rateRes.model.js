import { sequelize } from '../common/sequelize/init.sequelize.js'; // Đảm bảo đường dẫn đúng
import { DataTypes } from 'sequelize';

const rate_res = sequelize.define('rate_res', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    res_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_rate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
    tableName: 'rate_res', 
    timestamps: true     
})
rate_res.sync()
.then(() =>
    console.log("Đồng bộ hóa rate_res thành công")
).catch(() => console.log("Đồng bộ hóa rate_res không thành công"))
export default rate_res

