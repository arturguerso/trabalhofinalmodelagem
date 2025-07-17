const  Usuario = require('../model/Usuario')
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
        const valor = await Cliente.findByPk(id)
        if(valor === null){
            res.status(404).json({message: 'erro no site'})
        }else{
            await  Usuario.destroy({where: {id:id}})
            res.status(200).json({message: 'sucesso ao apagar dados do cliente'})
        }
    }catch(err){
        console.error('erro ao apagar dados do cliente do sistema', err)
        res.status(500).json({message: 'erro ao apagar dados do cliente'})
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
    try {
      const nome = await Usuario.findOne()
      if (nome) {
        res.status(200).json(nome.nome)
        console.log(nome.nome)
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (err) {
      console.error('Erro ao listar nome do usuário', err)
      res.status(500).json({ message: 'Erro ao listar nome do usuário' })
    }
  }

  module.exports = {
    cadastrar,
    listar,
    listarId,
    listarNome,
    apagar,
    atualizar
};