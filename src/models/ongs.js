const mongoose = require('mongoose');

const ongsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: { 
        type: String,
        required: true
    },
    email: { 
        type: String
    },
    telefone: {
        type: String,
        required: true
    },
    instagram: {
        type: String
    },
    descricao: {
        type: String, //tipo do dado ??????
        required: true
    },
    dataInclusao: { 
        type: Date,
        required: true,
        default: new Date
    },
    senha: { 
        type: String 
    },
    cep: { 
        type: String,
    },
    cidade: { 
        type: String
    },
    estado: { 
        type: String
    },
    bairro: { 
        type: String
    },
    rua: { 
        type: String
    },
    numero: { 
        type: String
    },
    tipoDoacoes: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'tipoDoacoes'
    }
}, {
    versionKey: false
});

const ongs = mongoose.model('ongs', ongsSchema);

module.exports = ongs;