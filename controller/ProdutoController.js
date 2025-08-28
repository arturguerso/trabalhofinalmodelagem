const Produto = require('../model/Produto') 
const { Op } = require('sequelize')

const cadastrar = async(req,res)=>{
    const dados = req.body
    try{
        const valores = await Produto.create(dados)
        res.status(200).json(valores)
    }catch(err){
        console.error('Erro ao cadastrar dados do Produto no site', err)
        res.status(500).json({message: 'Erro ao cadastrar dados do Produto no site'})
    }
}

const listar = async(req,res)=>{
    try{
        const valores = await Produto.findAll()
        if(valores.length > 0){ 
            res.status(200).json(valores)
           
        }else{
            res.status(404).json({message: 'Nenhum Produto encontrado'}) 
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
            res.status(404).json({message: 'Produto não encontrado para apagar'}) 
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
        const valoresExistentes = await Produto.findByPk(id)
        if(valoresExistentes === null){
            res.status(404).json({message: 'Produto não encontrado para atualizar'}) 
        }else{
            await Produto.update(dados, {where:{id:id}})
            const valoresAtualizados = await Produto.findByPk(id) 
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
        const valor = await Produto.findByPk(id); 
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
const listarTitulo = async (req, res) => {
    const { nome } = req.params; 
    try {
      const produtos = await Produto.findAll({
        where: { titulo: { [Op.like]: `%${nome}%` } }
      });
      if (produtos.length === 0) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        console.log(produtos)
        res.status(200).json(produtos)
    }
    } catch (err) {
      console.error('Erro ao consultar o titulo', err);
      res.status(500).json({ message: 'Erro ao consultar o titulo' });
    }
  };


  const grafico = async (req,res)=>{
    try{
        // Aqui pega só os campos que interessam pro gráfico
        const dados = await Produto.findAll({
            attributes: ['categoria', 'estoque', 'preco'] // já serve pra gráficos
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
    apagar,
    atualizar,
    listarId,
    listarTitulo,
    grafico
};