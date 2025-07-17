const Compras = require('../model/Compras')

const cadastrar = async(req,res)=>{
    const dados = req.body
    try{
        const valores = await Compras.create(dados)
        res.status(201).json(valores)
    }catch(err){
        console.error('erro ao cadastrar dados do Compras no site', err)
        res.status(500).json({message: 'erro ao cadastrar dados do Compras no site'})
    }
}

const listar = async(req,res)=>{
    try{
        const valores = await Compras.findAll()
        if(valores){
            res.status(200).json(valores)
            console.log(valores) // Considere remover este console.log em produção, pois pode imprimir muitos dados no console.
        }else{
            res.status(404).json({message: 'erro no site'})
        }
    }catch(err){
        console.error('erro ao listar dados do Compras do sistema', err)
        res.status(500).json({message: 'erro ao listar dados do Compras'})
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        const valor = await Compras.findByPk(id)
        if(valor === null){
            res.status(404).json({message: 'erro no site'})
        }else{
            await Compras.destroy({where: {id:id}})
            res.status(200).json({message: 'sucesso ao apagar dados do Compras'})
        }
    }catch(err){
        console.error('erro ao apagar dados do Compras do sistema', err)
        res.status(500).json({message: 'erro ao apagar dados do Compras'})
    }
}

const atualizar = async(req,res)=>{
    const dados = req.body
    const id = req.params.id
    try{
        const valores = await Compras.findByPk(id)
        if(valores === null){
            res.status(404).json({message: 'erro no site'})
        }else{
            await Compras.update(dados, {where:{id:id}})
            const valoresAtualizados = await Compras.findByPk(id) // Renomeei a variável para evitar conflito
            res.status(200).json(valoresAtualizados)
        }
    }catch(err){
        console.error('erro ao atualizar dados do Compras do sistema', err)
        res.status(500).json({message: 'erro ao atualizar dados do Compras'})
    }
}

// EXPORTAÇÃO CORRIGIDA: Exporta um objeto contendo todas as funções
module.exports = {
    cadastrar,
    listar,
    apagar,
    atualizar
};