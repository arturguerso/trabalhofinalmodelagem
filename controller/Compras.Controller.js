const Compra = require('../model/Compras')

// Cadastrar compra
const cadastrar = async (req, res) => {
    const dados = req.body
    try {
        const valores = await Compra.create(dados)
        res.status(200).json(valores)
    } catch (err) {
        console.error('Erro ao cadastrar dados da compra', err)
        res.status(500).json({ message: 'Erro ao cadastrar dados da compra' })
    }
}

// Listar compras
const listar = async (req, res) => {
        try {
            const valores = await Compra.findAll()
            res.status(200).json(valores)
        } catch (err) {
            console.error('Erro ao listar compras', err)
            res.status(500).json({ message: 'Erro ao listar compras' })
        }
    }
// Atualizar compra
const atualizar = async (req, res) => {
    const dados = req.body
    const id = req.params.id
    try {
        const compraExistente = await Compra.findByPk(id)
        if (compraExistente === null) {
            res.status(404).json({ message: 'Compra não encontrada para atualizar' })
        } else {
            await Compra.update(dados, { where: { idCompra: id } })
            const compraAtualizada = await Compra.findByPk(id)
            res.status(200).json(compraAtualizada)
        }
    } catch (err) {
        console.error('Erro ao atualizar compra', err)
        res.status(500).json({ message: 'Erro ao atualizar compra' })
    }
}

// Apagar compra
const apagar = async (req, res) => {
    const id = req.params.id
    try {
        const compraExistente = await Compra.findByPk(id)
        if (compraExistente === null) {
            res.status(404).json({ message: 'Compra não encontrada para apagar' })
        } else {
            await Compra.destroy({ where: { idCompra: id } })
            res.status(200).json({ message: 'Compra excluída com sucesso' })
        }
    } catch (err) {
        console.error('Erro ao apagar compra', err)
        res.status(500).json({ message: 'Erro ao apagar compra' })
    }
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    apagar
}
