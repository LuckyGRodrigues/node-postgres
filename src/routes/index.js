import clienteRoute from "./clienteRoute";
import fornecedorRoute from "./fornecedorRoute";
import produtoRoute from "./produtoRoute";
import relatorioCompraRoute from "./relatorioCompraRoute";
import relatorioVendaRoute from "./relatorioVendaRoute";

function Routes(app){
    clienteRoute(app)
    fornecedorRoute(app)
    produtoRoute(app)
    relatorioCompraRoute(app)
    relatorioVendaRoute(app)
}

export default Routes;