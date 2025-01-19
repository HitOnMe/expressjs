import sequelize from 'sequelize';

const {Model} = sequelize

export default class rateRes extends Model{
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
        } ,
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        date_res: {
            type: DataTypes.DATE,
            allowNull: false
        }
       }, {
        sequelize,
        tableName: 'rate_res',
        timestamps: true
       }
        )
    }
} 
