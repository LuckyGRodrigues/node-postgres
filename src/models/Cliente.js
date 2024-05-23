import { DataTypes } from 'sequelize';
import { sequelize } from "../config";

const Cliente = sequelize.define(
    'clientes',{
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
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
)

export default Cliente;