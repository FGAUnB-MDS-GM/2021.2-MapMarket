const express = require('express')
const mongoose = require('mongoose')


require('../model/Produto')
require('../model/Categoria')
require('../model/SubCategoria')
require('../model/ListaCompraReco')
const Produto = mongoose.model('produtos')
const Categoria = mongoose.model('categorias')
const SubCategoria = mongoose.model("subCategorias")
const ListaCompraReco = mongoose.model('listaComprasRecorrente')

const router = express.Router()

//lista todos os produtos
router.get("/produtos", (req,res)=>{
    Produto.find({}).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
})

//retorna um produto
router.get("/produtos/:id", (req, res)=>{
    Produto.findOne({'idProduto':req.params.id}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//lista todos os produtos
router.get("/categorias", (req,res)=>{
    Categoria.find({}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//retorna todos os produtos da categoria
router.get("/produtos/categoria/:id", (req, res)=>{
    Produto.find({'idCategoria': req.params.id}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//lista subcategorias de uma categoria
router.get("/categorias/:idCategoria/sub", (req, res)=>{
    SubCategoria.find({"Categoria": req.params.idCategoria}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//lista produtos de uma categoria e subcategoria
router.get("/produtos/categoria/:idCategoria/sub/:idSub", (req, res)=>{
    Produto.find({"categoria": req.params.idCategoria, "subcategoria": req.params.idSub}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//lista lista de compras recorrente
router.get("/listaComprasReco", (req, res)=>{
    ListaCompraReco.find({}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//lista produtos de uma lista compras
router.get("/listaComprasReco/:idListaCompras", (req, res)=>{
    ListaCompraReco.find({'idListaCompras': req.params.idListaCompras}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

//cadastrar lista de compras
router.post('/login', (req,res)=>{
    console.log(req.body.email)
    res.send("recebido")
})

module.exports = router