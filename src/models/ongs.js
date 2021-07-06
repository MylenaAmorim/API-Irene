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
    endereco: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'enderecos'
    },
    tipoDoacoesRecebidas: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'tipoDoacoesRecebidas'
    }
}, {
    versionKey: false
});

const ongs = mongoose.model('ongs', ongsSchema);

module.exports = ongs;