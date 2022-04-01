const mongoose = require('mongoose')
const { conn } = require('../db/db')
const Schema = mongoose.Schema

const CategoriaSchema = Schema({
    nome: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    }
})
//collection
mongoose.model('categorias', CategoriaSchema)
module.exports = {
    CategoriaSchema : CategoriaSchema
}