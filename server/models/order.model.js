import sequelize from 'sequelize';

const {Model} = sequelize

export default class Order extends Model{
    static init(sequelize, DataTypes){
       return super.init({
      
        id : {
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        
        arr_sub_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        
       }, { 
        sequelize,
        tableName: 'orders',
        timestamps: true
       }
        )
    }
} 
