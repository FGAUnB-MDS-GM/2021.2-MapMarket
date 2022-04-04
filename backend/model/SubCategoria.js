const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Model - usuário
const SubCategoriaSchema = Schema({
    idSubCategoria: {
        type: Number,
        require: true
    },
    nome: {
        type: String,
        require: true
    },
    Categoria:{
        //type: Schema.Types.ObjectId,
        //ref: "categorias",
        //require: true
        type: Number,
        require: true
    }
})
//collection
mongoose.model('subCategorias', SubCategoriaSchema)
module.exports = {
    SubCategoriaSchema : SubCategoriaSchema
}