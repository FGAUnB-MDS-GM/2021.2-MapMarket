const mongoose = require('mongoose')
const { conn } = require('../db/db')
const Schema = mongoose.Schema
const { ProdutoSchema } = require('./Produto')


//Model - usuário
const ListaCompraSchema = Schema({
    idListaCompras: {
        type: Number,
        require: true
    },
    produtos: [ProdutoSchema]
})
//collection
mongoose.model('listaCompras', ListaCompraSchema)