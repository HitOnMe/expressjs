import Sequelize from 'sequelize';
import initModel from '../../models/init.model.js';
import {DATABASE} from '../constant/constant.js';

export const sequelize = new Sequelize(DATABASE, {logging: false})
const Model = initModel(sequelize)
sequelize.authenticate()
.then(() =>console.log('connected successfully'))
.catch(() => console.log('connect failed'))
export default Model

