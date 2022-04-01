const mongoose = require('mongoose')
const { conn } = require('../db/db')
const Schema = mongoose.Schema

//Model - usuário
const CompraSchema = Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'clientes'
    },
    listaCompras: {
        type: Schema.Types.ObjectId,
        ref: 'listaCompras'
    },
    formaPagamento: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})
//collection
mongoose.model('compra', CompraSchema)