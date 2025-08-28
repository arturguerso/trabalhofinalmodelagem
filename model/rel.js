const Usuario = require('./Usuario')
const Produto = require('./Produto')
const Compras = require('./Compras')

Usuario.hasMany(Compras, {
    foreignKey: 'id_usuario',
    as: 'compras',
    onDelete: 'CASCADE'
})
Compras.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuarios',
    allowNull: false
})

Produto.hasMany(Compras, {
    foreignKey: 'id_produto',
    as: 'compras',
    onDelete: 'CASCADE'
})
Compras.belongsTo(Produto, {
    foreignKey: 'id_produto',
    as: 'produtos',
    allowNull: false
})

module.exports = { Produto, Usuario, Compras }