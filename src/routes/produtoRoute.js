import ProdutoController from "../controllers/ProdutoController";

export default (app) => {
    app.get('/produto', ProdutoController.get);
    app.get('/produto/:id', ProdutoController.get);
    app.post('/produto', ProdutoController.create);
    app.patch('/produto/:id', ProdutoController.update);
    app.delete('/produto/:id', ProdutoController.destroy);
};