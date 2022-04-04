const mongoose = require('mongoose')

require('../model/Categoria')
const Categoria = mongoose.model('categorias')

module.exports = {

    findAll: (req, res)=>{
        Categoria.find({}).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    },

    
}