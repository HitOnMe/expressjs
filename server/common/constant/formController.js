import Service from "../../services/root.service.js";
import { responseSuccess } from "../helper/success.helper.js";
import initModel from "../../models/init.model.js";

const formController = (object, method,  model, foreignKey) => {
    return async (req, res, next) => {
        
            // Lựa chọn model dựa trên tham số object
            const {likeRes, rateRes, Restaurant, user, order, unlike_res} = initModel();
            const obj = 
            object === 'user' ? user : 
            object === 'likeRes' ? likeRes : 
            object === 'rateRes' ? rateRes : 
            object === 'Restaurant' ? Restaurant : 
            object === 'unlike_res' ? unlike_res : 
            order;
        
            
            // Khởi tạo Service với model tương ứng
            const { getById, deleteObject, getbyObjects } = Service(obj);

            let data = null;

            // Kiểm tra phương thức delete
            if (method.includes('delete')) {
                // Lấy dữ liệu trước khi xóa 
                const dataDelete = await getById(req);
                await deleteObject(req); // Thực hiện xóa
                data = dataDelete;
            }
            else {
                const mod = 
                model === 'user' ? user : 
                model === 'likeRes' ? likeRes : 
                model === 'rateRes' ? rateRes : 
                model === 'Restaurant' ? Restaurant : 
                model === 'unlike_res' ? unlike_res : 
                order;
                // Gọi các phương thức khác (add, update, getObject, ...)
                data = method !== 'getbyObjects' ? await Service(obj)[method](req) :  await getbyObjects(obj, mod, foreignKey, req);
            }

            // Tạo phản hồi trả về cho client
            const response = responseSuccess(method.includes('update') ? req.body : data);
            console.log(JSON.stringify(response, null, 2));
            return res.status(200).json(response);
    };
};

export default formController;
