import Service from "../../services/root.service.js";
import { responseSuccess } from "../helper/success.helper.js";
import initModel from "../../models/init.model.js";

const formController = (object, method) => {
    return async (req, res, next) => {
        try {
            // Lựa chọn model dựa trên tham số object
            const {likeRes, rateRes, Restaurant, user, order, unlike_res} = initModel();
            const obj = object === 'user' ? user : 'likeRes'? likeRes: 'rateRes' ? rateRes : 'Restaurant'? Restaurant : 'unlike_res' ? unlike_res : order;
            // Khởi tạo Service với model tương ứng
            const { getById, deleteObject } = Service(obj);

            let data = null;

            // Kiểm tra phương thức delete
            if (method.includes('delete')) {
                // Lấy dữ liệu trước khi xóa 
                const dataDelete = await getById(req);
                await deleteObject(req); // Thực hiện xóa
                data = dataDelete;
            } else {
                // Gọi các phương thức khác (add, update, getObject, ...)
                data = await Service(obj)[method](req);
            }

            // Tạo phản hồi trả về cho client
            const response = responseSuccess(method.includes('update') ? req.body : data);
            console.log(JSON.stringify(response, null, 2));
            return res.status(200).json(response);
        } catch (error) {
            console.error(error);
            next(error); // Truyền lỗi đến middleware xử lý lỗi
        }
    };
};

export default formController;
