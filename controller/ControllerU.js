const  Usuario = require('../model/Usuario')
const { Op } = require('sequelize')
//--------------------------------------
const cadastrar = async(req,res)=>{
 const dados = req.body
 try{
    const valores = await  Usuario.create(dados)
    res.status(201).json(valores)
 }catch(err){
    console.error('erro ao cadastrar dados do cliente no site', err)
    res.status(500).json({message: 'erro ao cadastrar dados do cliente no site'})
 }
}
//////////////////////cadastro feito
const listar = async(req,res)=>{
    try{
        const valores = await  Usuario.findAll()
        if(valores){
            res.status(200).json(valores)
            console.log(valores)
        }else{
            res.status(404).json({message: 'erro no site'})
        }
    }catch(err){
        console.error('erro ao listar dados do cliente do sistema', err)
        res.status(500).json({message: 'erro ao listar dados do cliente'})
    }
}
////////////////listar feito
const apagar = async(req,res)=>{
     const id = req.params.id
    try{

     const valor = await Usuario.findByPk(id)
  if(valor === null){
    res.status(404).json({message: 'Usuário não encontrado'})
    }else{
    await Usuario.destroy({where: {id:id}})
    res.status(204).json({message: 'Sucesso ao apagar dados do usuário'}) 
    }
   }catch(err){
    console.error('Erro ao apagar dados do usuário do sistema', err)
    res.status(500).json({message: 'Erro interno ao apagar dados do usuário'})
     }
    }
//apagar feitop/////////////////////////
const atualizar = async(req,res)=>{
    const dados = req.body
    const id = req.params.id
    try{
        const valores = await  Usuario.findByPk(id)
        if(valores === null){
            res.status(404).json({message: 'erro no site'})
        }else{
            await Usuario.update(dados, {where:{id:id}})
            const valores = await  Usuario.findByPk(id)
            res.status(200).json(valores)
        }
    }catch(err){
        console.error('erro ao atualizar dados do cliente do sistema', err)
        res.status(500).json({message: 'erro ao atualizar dados do cliente'})
    }
}

const listarId = async (req, res) => {
    const id = req.params.id; 
    try {
        const valor = await Usuario.findByPk(id); 
        if (valor) {
            res.status(200).json(valor); 
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (err) {
        console.error('Erro ao buscar usuário por ID', err);
        res.status(500).json({ message: 'Erro ao buscar usuário' });
    }
}
/////////////////////////////////////////////////////////////////////
    

const listarNome = async (req, res) => {
    const { nome } = req.params
    try {
        const dados = await Usuario.findAll({
            where: { nome: { [Op.like]: `%${nome}%` } }
        })
        if (dados.length === 0) {
            res.status(404).json({ message: 'Usuário não encontrado' })
        } else {
            console.log(dados)
            res.status(200).json(dados)
        }
    }catch(err) {
        console.error('Erro ao consultar o nome', err)
        res.status(500).json({ message: 'Erro ao consultar o nome' })
    }
}

const grafico = async (req,res)=>{
    try{
        // Corrigido para usar Usuario em vez de Produto
        const dados = await Usuario.findAll({
            attributes: ['estado', 'idade'] // já serve pra gráficos
        })
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar dados do gráfico!',err)
        res.status(500).json({message: 'Erro ao listar dados do gráfico!'})
    }
}
  module.exports = {
    cadastrar,
    listar,
    listarId,
    listarNome,
    apagar,
    atualizar,
    grafico
};