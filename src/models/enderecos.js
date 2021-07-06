const mongoose = require('mongoose');

const enderecosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    logradouro: { 
        type: String,
        required: true
    }
}, {
    versionKey: false
});

const enderecos = mongoose.model('enderecos', enderecosSchema);

module.exports = enderecos;