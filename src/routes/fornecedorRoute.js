import FornecedorController from "../controllers/FornecedorController";

export default (app) => {
    app.get('/fornecedor', FornecedorController.get);
    app.get('/fornecedor/:id', FornecedorController.get);
    app.post('/fornecedor', FornecedorController.create);
    app.patch('/fornecedor/:id', FornecedorController.update);
    app.delete('/fornecedor/:id', FornecedorController.destroy);
};