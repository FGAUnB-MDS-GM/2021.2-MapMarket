const mongoose = require('mongoose')
const { conn } = require('../db/db')
const { CategoriaSchema } = require('./Categoria')
const { ProdutoSchema } = require('./Produto')
const { SubCategoriaSchema } = require('./SubCategoria')
const Schema = mongoose.Schema

//Model - usuário
const MercadoSchema = Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cnpj: {
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
    },
    //se for modelaaplicação apenas para um mercado, exluir arrays
    categorias: [CategoriaSchema],
    subcategorias: [SubCategoriaSchema],
    produtos: [ProdutoSchema]
})
//collection
mongoose.model('mercado', MercadoSchema)