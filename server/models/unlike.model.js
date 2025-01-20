import { sequelize } from '../common/sequelize/init.sequelize.js'; // Đảm bảo đường dẫn đúng
import { DataTypes } from 'sequelize';

const unlike_res = sequelize.define('unlike_res', {
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
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'       
        }
    },
    RestaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Restaurant', 
            key: 'res_id'      
        }
    }
}, {
    sequelize,        
    tableName: 'unlike_res', 
    timestamps: true      
})
unlike_res.sync()
.then(() =>
    console.log("Đồng bộ hóa unlike_res thành công")
).catch(() => console.log("Đồng bộ hóa unlike_res không thành công"))
export default unlike_res;
