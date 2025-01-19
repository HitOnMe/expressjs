import sequelize from 'sequelize';

const {Model} = sequelize

export default class Restaurant extends Model{
    static init(sequelize, DataTypes){
       return super.init({
        res_id : {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        res_name : {
            type: DataTypes.STRING,
            allowNull:true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        }
       }, {
        sequelize,
        tableName: 'restaurant',
        timestamps: true
       }
        )
    }
} 
