const Usuario = require('./Usuario')
const Produto = require('./Produto')
const Compra = require('./Compra')

Usuario.hasMany(Compra, {
    foreignKey: 'id_usuario',
    as: 'compras',
    onDelete: 'CASCADE'
})
Compra.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuarios',
    allowNull: false
})

Produto.hasMany(Compra, {
    foreignKey: 'id_produto',
    as: 'compras',
    onDelete: 'CASCADE'
})
Compra.belongsTo(Produto, {
    foreignKey: 'id_produto',
    as: 'produtos',
    allowNull: false
})

module.exports = { Produto, Usuario, Compra }