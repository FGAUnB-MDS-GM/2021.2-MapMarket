const mongoose = require('mongoose')
const { conn } = require('../db/db')
const Schema = mongoose.Schema

// MODEL
const CategoriaSchema = Schema({
    
    idCategoria:{
        type: Number,
        require: true
    },
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

const cate = mongoose.model('categorias')


module.exports = {
    CategoriaSchema : CategoriaSchema
}