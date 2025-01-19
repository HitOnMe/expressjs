
import user from '../models/UserModel.js'

const Service = (object) =>  {
    const getObject =  async(req) => await object.findAll({raw:true});
    const getById  =  async(req) => await object.findByPk(req.params.id);
    const add = async(req, res) => {
        const data = req.body;
        console.log(data)
        return await object.create(data)
    };
    const update =  async(req, res) => {
        const {id} = req.params;
        const data = req.body;
        console.log(data)
        return await object.update(data, {
            where: {id: id}
        })
    };
    const deleteObject = async(req, res) => {
        const {id} = req.params;
        const data = req.body;
        console.log(data)
        return await object.destroy({
            where: {id: id}
        })
    }
    return {getObject, getById, add, update, deleteObject}
}
export default Service
