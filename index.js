require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
//-----------------------------
const PORT = process.env.PORT || 3000
const hostname = 'localhost'
//-----------------------------
// Ensure these imports are only declared ONCE
const conn = require('./db/conn')
const produtocontroller = require('./controller/ProdutoController')
const comprascontroller = require('./controller/Compras.Controller') // <--- Make sure this line isn't duplicated
const usuarioController = require('./controller/ControllerU')
//-----------------------------------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ... rest of your code ...
//----------------------------------------------------
// Rotas de Compras
app.post('/Compras', comprascontroller.cadastrar);
app.get('/Compras', comprascontroller.listar);
app.put('/Compras/:id', comprascontroller.atualizar);
app.delete('/Compras/:id', comprascontroller.apagar);

//---------------------------------------------------
// Rotas de Usuário - **Caminhos corrigidos (removidos os espaços)**
app.post('/Usuario', usuarioController.cadastrar);
app.get('/Usuario', usuarioController.listar);
app.get('/Usuario/:id', usuarioController.listarId);
app.get('/Usuario/:id', usuarioController.listarNome); // Atenção: '/Usuario/:id' já existe. Verifique se essa rota é realmente necessária ou se deveria usar query params.
app.put('/Usuario/:id', usuarioController.atualizar);
app.delete('/Usuario/:id', usuarioController.apagar);

//-----------------------------------------------==--
// Rotas de Produto - **Caminhos corrigidos (removidos os espaços)**
app.post('/Produto', produtocontroller.cadastrar);
app.get('/Produto', produtocontroller.listar);
app.get('/Produto/:id', produtocontroller.listarId);
app.put('/Produto/:id', produtocontroller.atualizar);
app.delete('/Produto/:id', produtocontroller.apagar);

// Rota inicial para testar se a aplicação está rodando
app.get('/', (req,res)=>{
    res.status(200).json({message: 'aplicação rodando'})
})

//----------------------------------------------------
// Conecta ao banco de dados e, então, inicia o servidor
conn.sync() // Sincroniza os modelos com o banco de dados
.then(() => {
    // Servidor Express começa a "escutar" por requisições
    app.listen(PORT, hostname, () => {
        console.log(`Aplicação rodando em http://${hostname}:${PORT}`);
    });
})
.catch((err) => {
    // Captura e loga erros na conexão com o banco ou ao iniciar o servidor
    console.error('Erro ao conectar ao banco de dados ou iniciar a aplicação:', err);
});