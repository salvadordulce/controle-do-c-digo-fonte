const contatoModel = require("../models/contato.model");

function getContatos(req, res) {
    const contatos = contatoModel.listarContatos();
    res.json(contatos);
}

function criarContato(req, res) {
    const { nome, telefone } = req.body;

    if (!nome) {
        return res.status(400).json({ message: 'Contato é obrigátorio' });
    } if (!telefone) {
        return res.status(400).json({ message: 'Telefone é obrigátorio' });
    }

    const novocontato = contatoModel.criarContato(nome, telefone);
    res.status(201).json(novocontato);
}


module.exports = {
    getContatos,
    criarContato
}