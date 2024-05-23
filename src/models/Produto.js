import { DataTypes } from 'sequelize';
import { sequelize } from "../config";

const Produto = sequelize.define(
    'produtos',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descricao:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        marca:{
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        valor:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        quantidade:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    },
)

export default Produto;