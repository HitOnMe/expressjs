import sequelize from 'sequelize';
import _likeRes from './likeRes.model.js';
import _order from './order.model.js';
import _rateRes from './rateRes.model.js';
import _res from './res.model.js';
import _user from './user.model.js';
const DataTypes = sequelize.DataTypes;

const initModel = (sequelize) => {
    const likeRes = _likeRes.init(sequelize, DataTypes);
    const rateRes = _rateRes.init(sequelize, DataTypes);
    const res = _res.init(sequelize, DataTypes)
    const user = _user.init(sequelize, DataTypes)
    const order = _order.init(sequelize, DataTypes);
    likeRes.belongsTo(user, {as: 'resLikeUser', foreignKey: 'user_id'});
    user.hasMany(likeRes, {as : 'userLikeRes', foreignKey: 'likeResId'});
    rateRes.belongsTo(user, {as: 'rateResUser', foreignKey: 'likeRes_id'});
    user.hasMany(rateRes, {as : 'userRateRes', foreignKey: 'likeResId'});
    order.belongsTo(user, {as: 'userOrder', foreignKey: 'UserId'});
    user.hasMany(order, {as : 'orderUser', foreignKey: 'likeResId'});
    rateRes.belongsTo(res, {as : 'resRateRes', foreignKey: 'rateRes_id'});
    likeRes.belongsTo(res, {as: 'resLikeRes', foreignKey: 'res_id'});
    return {
        likeRes,
        rateRes,
        res,
        user,
        order
    }
};
export default initModel