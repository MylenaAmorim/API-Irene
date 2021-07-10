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
        type: Number,
        required: true
    },
    cidade: { 
        type: String,
        required: true
    },
    estado: { 
        type: String,
        required: true
    },
    bairro: { 
        type: String,
        required: true
    },
    rua: { 
        type: String,
        required: true
    },
    numero: { 
        type: String,
        required: true
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