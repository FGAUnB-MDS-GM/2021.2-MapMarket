const express = require('express')
const mongoose = require('mongoose')
const CategoriaController = require('../controllers/CategoriaController')
const ClienteController = require('../controllers/ClienteController')
const ProdutoController = require('../controllers/ProdutoController')
const SubCategoriaController = require('../controllers/SubCategoriaController')



require('../model/ListaCompraReco')



const ListaCompraReco = mongoose.model('listaComprasRecorrente')


const router = express.Router()

//lista todos os produtos
router.get("/produtos", ProdutoController.findAll)

//retorna um produto
router.get("/produtos/:id", ProdutoController.findById)

//retorna todos os produtos da categoria
router.get("/produtos/categoria/:id", ProdutoController.findByCategoria)

//lista produtos de uma categoria e subcategoria
router.get("/produtos/categoria/:idCategoria/sub/:idSub", ProdutoController.findBySubcategoria)

//lista todos os produtos
router.get("/categorias", CategoriaController.findAll)

//lista subcategorias de uma categoria
router.get("/categorias/:idCategoria/sub", SubCategoriaController.findAll)


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

/// ROTAS POST
router.post("/addUser", ClienteController.create)

//cadastrar lista de compras
router.post('/login', (req,res)=>{
    console.log(req.body.email)
    res.send("recebido")
})

module.exports = router