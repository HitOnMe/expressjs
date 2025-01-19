
import sequelize from 'sequelize'
const {Model, Sequelize} = sequelize

export default class like_res extends Model{
    static init(sequelize, DataTypes){
       return super.init({
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        res_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Restaurant',
                key: 'res_id'
            }
        }   
        ,
        date_like: {
            type: DataTypes.DATE,
            allowNull: false
        }
       }, {
        sequelize,
        tableName: 'like_res',
        timestamps: true
       }
        )
    }
} 
