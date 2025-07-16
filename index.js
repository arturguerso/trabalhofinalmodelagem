 require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
//-----------------------------
const PORT = 3000
const hostname = 'localhost'
//-----------------------------
const conn = require('./db/conn')
const produtocontroller = require('./ProdutoController/')
const comprascontroller = require('./controller/Compras.Controller')
const usuarioController = require('./controller/Usuario.Controller')
//-----------------------------------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())



//----------------------------------------------------
app.post('/Compras', comprascontroller.cadastrar);
app.get('/Compras', comprascontroller.listar);
app.put('/Compras/:id', comprascontroller.atualizar);
app.delete('/Compras/:id', comprascontroller.apagar);

//---------------------------------------------------
app.post('/ Usuario', usuarioController.cadastrar);
app.get('/Usuario', usuarioController.listar);
app.get('/Usuario/:id', usuarioController.listarId);
app.get('/Usuario/:id', usuarioController.listarNome)
app.put('/ Usuario/:id', usuarioController.atualizar);
app.delete('/ Usuario/:id', usuarioController.apagar);

//-----------------------------------------------==--
app.post('/ Produto', produtocontroller.cadastrar);
app.get('/Produto', produtocontroller.listar);
app.get('/Produto/:id', produtocontroller.listarId);
app.put('/ Produto/:id', produtocontroller.atualizar);
app.delete('/ Produto/:id', produtocontroller.apagar);


app.get('/', (req,res)=>{
    res.status(200).json({message: 'aplicação rodando'})
})
//----------------------------------------------------
conn.sync()
.then(()=>{
    app.addEventListener(PORT, hostname, ()=>{
        res.status(200).json({message: `aplicação rodadando em http://${hostname}:${PORT}`})
    } )
})
.catch((err)=>{
    console.error('erro ao fazer aplicação no host', err)
})
