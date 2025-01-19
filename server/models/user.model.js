import sequelize from 'sequelize'

const {Model} = sequelize

export default class user extends Model{
    static init(sequelize, DataTypes){
       return super.init({
        id : {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        full_name : {
            type: DataTypes.STRING,
            allowNull:true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        password: {
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
        tableName: 'users',
        timestamps: true
       }
        )
    }
} ;

