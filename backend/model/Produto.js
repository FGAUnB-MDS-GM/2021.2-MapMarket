const mongoose = require('mongoose')
const { conn } = require('../db/db')
const Schema = mongoose.Schema

//Model - usuário
const ProdutoSchema = Schema({
    idProduto: {
        type: Number,
        require: true
    },
    nome: {
        type: String,
        require: true
    },
    marca: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    descricao: {
        type: String,
    },
    categoria: {
        //type: Schema.Types.ObjectId,
        //ref: "categorias",
        //require: true
        type: Number,
        require: true
    },
    subcategoria: {
        //: Schema.Types.ObjectId,
        //ref: "subCategorias",
        //require: true
        type: Number,
        require: true
    }
})
//collection
mongoose.model('produtos', ProdutoSchema)

module.exports ={
    ProdutoSchema : ProdutoSchema
}