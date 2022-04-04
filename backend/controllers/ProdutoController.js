const mongoose = require('mongoose')

require('../model/Produto')
const Produto = mongoose.model('produtos')

module.exports = {
    create: (req, res)=>{
        Produto.create({
            idProduto: req.body.idProduto,
            nome: req.body.nome,
            marca: req.body.marca,
            preco: req.body.preco,
            descricao: req.body.descricao,
            categoria: req.body.categoria,
            subcategoria: req.body.subcategoria
        }).then(()=>{
            res.statusCode = 201
            res.send("cadastrado")
        }).catch(()=>{
            res.statusCode = 400
            res.send("erro ao cadastrar")
        })
    },

    findAll: (req, res)=>{
        Produto.find({}).then((data)=>{
            res.send(data)
            res.statusCode = 200
        })
        .catch((err)=>{
            res.send(err)
            res.statusCode = 500
        })
    },

    findById: (req, res)=>{
        Produto.findOne({'idProduto': req.params.id}).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    },

    findByCategoria: (req, res)=>{
        Produto.find({"categoria": req.params.idCategoria, "subcategoria": req.params.idSub}).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    },

    findBySubcategoria: (req, res)=>{

    }
    
}
