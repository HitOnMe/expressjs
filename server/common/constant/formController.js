import models from '../constant/formModel.js'
import Service from "../../services/root.service.js";
import { responseSuccess } from "../helper/success.helper.js";

const formController = (object, method, model, foreignKey) => {
  return async (req, res, next) => {
    try {
      // Lấy model từ file models.js
      const obj = models[object];
      if (!obj) throw new Error("Model not found");

      // Khởi tạo Service với model
      const { getById, deleteObject, getbyObjects } = Service(obj);

      let data = null;

      // Xử lý CRUD
      if (method.includes("delete")) {
        const dataDelete = await getById(req); // Lấy dữ liệu trước khi xóa
        await deleteObject(req); // Thực hiện xóa
        data = dataDelete;
      } else {
        const mod = models[model];
        data =
          method !== "getbyObjects"
            ? await Service(obj)[method](req)
            : await getbyObjects(obj, mod, foreignKey, req);
      }

      // Trả về phản hồi
      const response = responseSuccess(
        method.includes("update") ? req.body : data
      );
      console.log(JSON.stringify(response, null, 2));
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
};

export default formController;
