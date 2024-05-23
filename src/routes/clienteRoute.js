import ClienteController from "../controllers/ClienteController";

export default (app) => {
    app.get('/cliente', ClienteController.get);
    app.get('/cliente/:id', ClienteController.get);
    app.post('/cliente', ClienteController.create);
    app.patch('/cliente/:id', ClienteController.update);
    app.delete('/cliente/:id', ClienteController.destroy);
};