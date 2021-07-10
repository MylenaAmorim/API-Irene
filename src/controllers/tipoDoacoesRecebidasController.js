const mongoose = require('mongoose')
const Tipo = require('../models/tipoDoacoesRecebidas')

const criaTipo = async(req, res) => {
    const tipo = new Tipo({
        _id: new mongoose.Types.ObjectId(),
        nomeTipo: req.body.nomeTipo
    })

    const tipoExistente = await Tipo.findOne({nomeTipo: req.body.nomeTipo})

    if (tipoExistente) {
        return res.status(409).json({error: "Tipo de doação já cadastrado!"})
    }

    try {
        const novoTipo = await tipo.save()
        return res.status(201).json(novoTipo)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const mostraTipos = async (req, res) => {
    const tipos = await Tipo.find();
    return res.status(200).json(tipos)
}

const mostraTipo = async (req, res) => {
    const tipo = await Tipo.findById(req.params.id)

    return res.status(200).json(tipo)
}

const alteraTipo = async (req, res) => {
    const encontraTipo = await Tipo.findById(req.params.id)

    if (encontraTipo == null) {
        return res.status(404).json({message: "Tipo de doação não encontrado!"})
    }

    if (req.body.nomeTipo != null) {
        encontraTipo.nomeTipo = req.body.nomeTipo
    }

    try {
        const tipoAtualizado = await encontraTipo.save()
        res.status(200).json(tipoAtualizado)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deletaTipo = async (req, res) => {
    const encontraTipo = await Tipo.findById(req.params.id)

    if (encontraTipo == null) {
        return res.status(404).json({message: "Tipo de doação não encontrada!"})
    }

    try {
        await encontraTipo.remove()
        res.status(204).json({message: "Tipo de doação deletada com sucesso!"})
    } catch (erro) {
        res.status(500).json({message: erro.message})
    }
}

module.exports = {
    criaTipo,
    mostraTipos,
    mostraTipo,
    alteraTipo,
    deletaTipo
}
