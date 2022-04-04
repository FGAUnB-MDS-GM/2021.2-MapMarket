const mongoose = require('mongoose')

require('../model/SubCategoria')
const SubCategoria = mongoose.model("subCategorias")

module.exports = {

    findAll: (req, res)=>{
        SubCategoria.find({"Categoria": req.params.idCategoria}).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    },

    
}