import { sequelize } from '../common/sequelize/init.sequelize.js'; // Đảm bảo đường dẫn đúng
import { DataTypes } from 'sequelize';

const order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    arr_sub_id: {
        type: DataTypes.STRING,
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
    tableName: 'order', 
    timestamps: true     
});

order.sync()
.then(() =>
    console.log("Đồng bộ hóa rate_res thành công")
).catch(() => console.log("Đồng bộ hóa rate_res không thành công"))
export default order;
