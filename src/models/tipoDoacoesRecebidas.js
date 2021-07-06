const mongoose = require('mongoose');

const tipoDoacoesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nomeTipo: { 
        type: String,
        required: true
    }
}, {
    versionKey: false
});

const tipoDoacoes = mongoose.model('tipoDoacoes', tipoDoacoesSchema);

module.exports = tipoDoacoes;