


const Service = (object) =>  {
   //Hàm lấy tất cả object
    const getObject =  async(req) => await object.findAll({raw:true});
    //Hàm lấy object theo id
    const getById  =  async(req) => await object.findByPk(req.params.id);
    //Hàm add
    const add = async(req, res) => {
        const data = req.body;
        console.log(data)
        return await object.create(data)
    };
    //Hàm update
    const update =  async(req, res) => {
        const {id} = req.params;
        const data = req.body;
        console.log(data)
        return await object.update(data, {
            where: {id: id}
        })
    };
    //Hàm delete 
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
