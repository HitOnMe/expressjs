


const Service = (object) =>  {
   //Hàm lấy tất cả object
    const getObject =  async(req) => await object.findAll({raw:true});
    //Hàm lấy model theo object
    const getbyObjects =  async(object, model, foreignKey, req) => await object.findAll({
        where: {[foreignKey]: req.params.id},
        include: [{
            model: model,
           
        }]
    });
    //Hàm lấy object theo id
    const getById  =  async(req) => await object.findByPk(req.params.id);
    //Hàm add
    const add = async(req, res) => {
        const data = req.body;
        return await object.create(data)
    };
    //Hàm update
    const update =  async(req, res) => {
        const {id} = req.params;
        const data = req.body;
        return await object.update(data, {
            where: {id: id}
        })
    };
    //Hàm delete 
    const deleteObject = async(req, res) => {
        const {id} = req.params;
        return await object.destroy({
            where: {id: id}
        })
    }
    return {getObject, getById, getbyObjects, add, update, deleteObject}
}
export default Service
