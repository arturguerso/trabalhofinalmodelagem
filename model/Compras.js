const { DataTypes } = require('sequelize')
const db = require('../db/conn')
//---------------------------------------
const Compras = db.define('compras', {
    idCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    /////////////////////////////////////////
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // nome da tabela referenciada (ou do model, depende do Sequelize)
            key: 'id'
        }
    },
    /////////////////////////////////////////
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'id'
        }
    },
    /////////////////////////////////////////
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    /////////////////////////////////////////
    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    /////////////////////////////////////////
    precoUnitario: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    /////////////////////////////////////////
    desconto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    /////////////////////////////////////////
    precoFinal: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    /////////////////////////////////////////
    formaPagamento: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    /////////////////////////////////////////
    statusCompra: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    timestamps: true
})

module.exports = Compras