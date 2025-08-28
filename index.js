require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000
const hostname = 'localhost'

const conn = require('./db/conn')
const produtocontroller = require('./controller/ProdutoController')
const comprascontroller = require('./controller/Compras.Controller')
const usuarioController = require('./controller/ControllerU')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Rotas Compras
app.post('/Compras', comprascontroller.cadastrar)
app.get('/Compras', comprascontroller.listar)
app.put('/Compras/:id', comprascontroller.atualizar)
app.delete('/Compras/:id', comprascontroller.apagar)

// Rotas Usuario
app.post('/Usuario', usuarioController.cadastrar)
app.get('/Usuario', usuarioController.listar)
app.get('/Usuario/:id', usuarioController.listarId)
app.get('/Usuario/nome/:nome', usuarioController.listarNome)
app.put('/Usuario/:id', usuarioController.atualizar)
app.delete('/Usuario/:id', usuarioController.apagar)

// Rotas Produto
app.post('/Produto', produtocontroller.cadastrar)
app.get('/Produto', produtocontroller.listar)
app.get('/Produto/:id', produtocontroller.listarId)
app.get('/Produto/nome/:nome', produtocontroller.listarTitulo)
app.put('/Produto/:id', produtocontroller.atualizar)
app.delete('/Produto/:id', produtocontroller.apagar)
/// rotas dos graficos
app.get('/produto/grafico',produtocontroller.grafico)
app.get('/usuario/grafico',usuarioController.grafico)


app.get('/', (req, res) => {
    res.status(200).json({ message: 'aplicação rodando' })
})

conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Aplicação rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados ou iniciar a aplicação:', err)
    })
