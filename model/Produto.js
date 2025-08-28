const { DataTypes } = require('sequelize')
const db = require('../db/conn')
//---------------------------------------
const Produto = db.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    /////////////////////////////////////////
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    /////////////////////////////////////////
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    /////////////////////////////////////////
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    /////////////////////////////////////////
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    /////////////////////////////////////////
    percentualDesconto: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    /////////////////////////////////////////
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    /////////////////////////////////////////
    marca: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    /////////////////////////////////////////

}, {
    timestamps: true
})

module.exports = Produto