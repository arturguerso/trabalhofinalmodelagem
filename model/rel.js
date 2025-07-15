

const Usuario = require('./Usuario');
const Produto = require('./Produto');
const Compra = require('./Compra');

Usuario.hasMany(Compra, {
    foreignKey: 'id_usuario'
})
Compra.belongsTo(Usuario, {
    foreignKey: 'id_usuario'
})

Produto.hasMany(Compra, {
    foreignKey: 'id_produto'
})
Compra.belongsTo(Produto, {
    foreignKey: 'id_produto'
})

module.exports = { Produto, Usuario, Compra}