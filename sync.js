const conn = require('./db/conn')

const { Usuario, Produto, Compras } = require('./model/rel')

async function syncDataBase() {
    try {
        await conn.sync({ force: true })
        console.log('Tabelas criadas e o banco de dados foi sincronizado')
    } catch (err) {
        console.error('Erro ao criar tabelas e sincronizar', err)
    } finally {
        await conn.close()
        console.log('Banco de dados fechado')
    }
}

syncDataBase()
