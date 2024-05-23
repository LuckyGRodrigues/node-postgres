import { DataTypes } from 'sequelize';
import { sequelize } from "../config";

const Fornecedor = sequelize.define(
    'fornecedor',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        telefone:{
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        cnpj:{
            type: DataTypes.STRING(12)
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
)

export default Fornecedor;