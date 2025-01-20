import { sequelize } from '../common/sequelize/init.sequelize.js'; // Đảm bảo đường dẫn đúng
import { DataTypes } from 'sequelize';

const Restaurant = sequelize.define('Restaurant', {
    res_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    res_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    desc: {
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
    }
}, {
    sequelize,         
    tableName: 'restaurant', 
    timestamps: true     
})
Restaurant.sync({alter: true})
.then(() =>
    console.log("Đồng bộ hóa Restaurant thành công")
).catch((error) => console.log("Đồng bộ hóa Restaurant không thành công"))
export default Restaurant

