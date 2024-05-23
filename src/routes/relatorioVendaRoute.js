import RelatorioVendaController from "../controllers/RelatorioVendaController";

export default (app) => {
    app.get('/relatorio-venda', RelatorioVendaController.get);
    app.get('/relatorio-venda/:id', RelatorioVendaController.get);
    app.post('/relatorio-venda', RelatorioVendaController.create);
    app.patch('/relatorio-venda/:id', RelatorioVendaController.update);
    app.delete('/relatorio-venda/:id', RelatorioVendaController.destroy);
};