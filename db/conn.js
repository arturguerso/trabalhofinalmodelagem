const dotenv = require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { 
    host: process.env.DB_HOST, 
    dialect: 'mysql', 
    port: process.env.PORT2
}) 

        sequelize.authenticate()
        .then(()=>{
            console.log('sucesso ao conectar com o banco de dados')
        })
        .catch((err)=>{
            console.error('erro ao configurar com o banco de dados', err)
        })

        module.exports = sequelize