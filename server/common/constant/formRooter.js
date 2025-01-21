import express from 'express';
import rootController from '../../controllers/root.controller.js'
const formRooter = (object) => {
    const rooter = express.Router();
    rooter.get(object, rootController(object,'getObject'));
    rooter.get(`${object}/:id`, rootController(object,'getById'));
    rooter.post(object, rootController(object,'add'));
    rooter.put(`${object}/:id`, rootController(object,'update'));
    rooter.patch(`${object}/:id`, rootController(object,'update'));
    rooter.delete(`${object}/:id`, rootController(object,'deleteObject'));
    return rooter
}
export default formRooter
