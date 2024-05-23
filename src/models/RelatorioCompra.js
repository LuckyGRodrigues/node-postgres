import { DataTypes } from 'sequelize';
import { sequelize } from "../config";
import Fornecedor from './Fornecedor';
import Produto from './Produto';

const RelatorioCompra = sequelize.define(
    'relatorio_compras',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descricao:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        dataEmissao:{
            field: 'data_emissao',
            type: DataTypes.INTEGER,
            allowNull: true,
        },

    },
    {
        freezeTableName: true,
        timestamps: false,
    },
)

RelatorioCompra.belongsTo(Fornecedor, {
    as: 'fornecedores',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_fornecedor',
        name: 'idFornecedor',
        allowNull: false,
    }
})

RelatorioCompra.belongsTo(Produto, {
    as: 'produtos',
    onDelete: 'no action',
    onUpdate: 'no action',
    foreignKey: {
        field: 'id_produtos',
        name: 'idProduto',
        allowNull: false,
    }
})

export default RelatorioCompra;