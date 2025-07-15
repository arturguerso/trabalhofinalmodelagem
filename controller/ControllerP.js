const Produto = require('../model/Produto')
//--------------------------------------
const cadastrar = async(req,res)=>{
 const dados = req.body
 try{
    const valores = await Produto.create(dados)
    res.status(201).json(valores)
 }catch(err){
    console.error('erro ao cadastrar dados do cliente no site', err)
    res.status(500).json({message: 'erro ao cadastrar dados do cliente no site'})
 }
}
//////////////////////cadastro feito
const listar = async(req,res)=>{
    try{
        const valores = await Produto.findAll()
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
        const valor = await Produto.findByPk(id)
        if(valor === null){
            res.status(404).json({message: 'erro no site'})
        }else{
            await Produto.destroy({where: {id:id}})
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
        const valores = await Cliente.findByPk(id)
        if(valores === null){
            res.status(404).json({message: 'erro no site'})
        }else{
            await Produto.update(dados, {where:{id:id}})
            const valores = await Produto.findByPk(id)
            res.status(200).json(valores)
        }
    }catch(err){
        console.error('erro ao atualizar dados do cliente do sistema', err)
        res.status(500).json({message: 'erro ao atualizar dados do cliente'})
    }
}

module.exports = (cadastrar, listar, apagar, atualizar)

