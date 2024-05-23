import RelatorioCompraController from "../controllers/RelatorioCompraController";

export default (app) => {
    app.get('/relatorio-compra', RelatorioCompraController.get);
    app.get('/relatorio-compra/:id', RelatorioCompraController.get);
    app.post('/relatorio-compra', RelatorioCompraController.create);
    app.patch('/relatorio-compra/:id', RelatorioCompraController.update);
    app.delete('/relatorio-compra/:id', RelatorioCompraController.destroy);
};