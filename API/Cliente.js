const mongoose = require('mongoose')
const { conn } = require('../db/db')
const Schema = mongoose.Schema

//Model - usuário
const ClienteSchema = Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true
    },
    telefone: {
        type: Number,
        require: true
    },
    cep: {
        type: Number,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    complemento: {
        type: String,
    }
})
//collection
mongoose.model('clientes', ClienteSchema)