const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ////////////////////////////////
    nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ////////////////////////////////
    Sobrenome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ////////////////////////////////
    Idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ////////////////////////////////
    email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    ////////////////////////////////
    telefone: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ////////////////////////////////
    endereço: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ////////////////////////////////
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
    ////////////////////////////////
}, {
    timestamps: true
})