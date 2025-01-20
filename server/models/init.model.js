import sequelize from 'sequelize';
import user from './user.model.js';
import Restaurant from './res.model.js';
import order from './order.model.js';
import likeRes from './likeRes.model.js';
import unlike_res from './unlike.model.js';
import rateRes from './rateRes.model.js';




const syncModel = async(...models) => {
   try {
    await Promise.all(
        models.map(model => model.sync()));
        console.log("đồng bộ hóa success")
   } catch(error) {
       console.log(error);
   }
}

const initModel = () => {
    
    likeRes.belongsTo(user, {foreignKey: 'user_id', targetKey: 'user_id'});
    user.hasMany(likeRes, {foreignKey: 'user_id'});

    unlike_res.belongsTo(user, {foreignKey: 'user_id', targetKey: 'user_id'});
    user.hasMany(unlike_res, {foreignKey: 'user_id'});

    rateRes.belongsTo(user,{foreignKey: 'user_id', targetKey: 'user_id'});
    user.hasMany(rateRes,{foreignKey: 'user_id'});

    order.belongsTo(user,{foreignKey: 'user_id', targetKey: 'user_id'});
    user.hasMany(order,{foreignKey: 'user_id'});

    rateRes.belongsTo(Restaurant,{foreignKey: 'res_id', targetKey: 'res_id'});
    likeRes.belongsTo(Restaurant,{foreignKey: 'res_id', targetKey: 'res_id'});
    
    Restaurant.hasMany(rateRes, { foreignKey: 'res_id' });
    Restaurant.hasMany(likeRes, { foreignKey: 'res_id' });

    unlike_res.belongsTo(Restaurant,{foreignKey: 'res_id', targetKey: 'res_id'});
    Restaurant.hasMany(unlike_res, { foreignKey: 'res_id' });
    return {
        likeRes,
        rateRes,
        Restaurant,
        user,
        order,
        unlike_res
    };
};

export default initModel;
