const Produto = require('../model/Produto') // Certifique-se de que o caminho para o seu modelo Produto está correto

// Funções do controlador
const cadastrar = async(req,res)=>{
    const dados = req.body
    try{
        const valores = await Produto.create(dados)
        res.status(201).json(valores)
    }catch(err){
        console.error('Erro ao cadastrar dados do Produto no site', err)
        res.status(500).json({message: 'Erro ao cadastrar dados do Produto no site'})
    }
}

const listar = async(req,res)=>{
    try{
        const valores = await Produto.findAll()
        if(valores.length > 0){ // Melhor verificar se o array não está vazio
            res.status(200).json(valores)
            // console.log(valores) // Considere remover este console.log em produção
        }else{
            res.status(404).json({message: 'Nenhum Produto encontrado'}) // Mensagem mais específica
        }
    }catch(err){
        console.error('Erro ao listar dados do Produto no sistema', err)
        res.status(500).json({message: 'Erro ao listar dados do Produto'})
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        const valor = await Produto.findByPk(id)
        if(valor === null){
            res.status(404).json({message: 'Produto não encontrado para apagar'}) // Mensagem mais específica
        }else{
            await Produto.destroy({where: {id:id}})
            res.status(200).json({message: 'Sucesso ao apagar dados do Produto'})
        }
    }catch(err){
        console.error('Erro ao apagar dados do Produto do sistema', err)
        res.status(500).json({message: 'Erro ao apagar dados do Produto'})
    }
}

const atualizar = async(req,res)=>{
    const dados = req.body
    const id = req.params.id
    try{
        const valoresExistentes = await Produto.findByPk(id) // Renomeei para maior clareza
        if(valoresExistentes === null){
            res.status(404).json({message: 'Produto não encontrado para atualizar'}) // Mensagem mais específica
        }else{
            await Produto.update(dados, {where:{id:id}})
            const valoresAtualizados = await Produto.findByPk(id) // Pega os dados atualizados para retornar
            res.status(200).json(valoresAtualizados)
        }
    }catch(err){
        console.error('Erro ao atualizar dados do Produto do sistema', err)
        res.status(500).json({message: 'Erro ao atualizar dados do Produto'})
    }
}

const listarId = async (req, res) => {
    const id = req.params.id;
    try {
        const valor = await Produto.findByPk(id); // Era 'Usuario.findByPk', corrigido para 'Produto.findByPk'
        if (valor) {
            res.status(200).json(valor);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (err) {
        console.error('Erro ao buscar Produto por ID', err);
        res.status(500).json({ message: 'Erro ao buscar Produto' });
    }
}

const listarNome = async (req, res) => {
    const { nome } = req.query; // É mais comum buscar por nome usando query parameters
    try {
        const produto = await Produto.findOne({ where: { nome: nome } }); // Adicionado filtro WHERE
        if (produto) {
            res.status(200).json(produto); // Retorna o objeto produto, não apenas o nome
            // console.log(produto.nome); // Considere remover este console.log
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (err) {
        console.error('Erro ao listar nome do Produto', err);
        res.status(500).json({ message: 'Erro ao listar nome do Produto' });
    }
}


// --- EXPORTAÇÃO CORRIGIDA ---
module.exports = {
    cadastrar,
    listar,
    apagar,
    atualizar,
    listarId,
    listarNome
};