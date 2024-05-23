import { DataTypes } from 'sequelize';
import { sequelize } from "../config";
import Cliente from './Cliente';
import Produto from './Produto';

    
const RelatorioVenda = sequelize.define(
    'relatorio_vendas',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        decricao:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        data_emissao:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
)

RelatorioVenda.belongsTo(Cliente, {
    as: 'clientes',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_clientes',
        name: 'idCliente',
        allowNull: false,
    }
})

RelatorioVenda.belongsTo(Produto, {
    as: 'produtos',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_produtos',
        name: 'idProduto',
        allowNull: false,
    }
})

export default RelatorioVenda;