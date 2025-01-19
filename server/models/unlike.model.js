
import sequelize from 'sequelize'
const {Model, Sequelize} = sequelize

export default class unlikeRes extends Model{
    static init(sequelize, DataTypes){
       return super.init({
      
        date_like: {
            type: DataTypes.DATE,
            allowNull: false
        }
       }, {
        sequelize,
        tableName: 'unlikeRes',
        timestamps: true
       }
        )
    }
} 
