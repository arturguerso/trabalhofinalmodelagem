const {DataTypes} = require('sequelize')
const db = require('../db/conn')

///////////////////////////
const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    telefone: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true
})

module.exports = Usuario
