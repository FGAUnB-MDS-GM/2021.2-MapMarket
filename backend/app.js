const express = require('express')
const { DbContection } = require('./db/db')
const db = require('./db/db')
const app = express()
const user = require('./rotas/user')

//mongo
require('./model/Categoria')
require('./model/Cliente')
require('./model/Compra')
require('./model/ListaCompraReco')
require('./model/ListaCompras')
require('./model/Mercado')
require('./model/Produto')
require('./model/SubCategoria')

const mongoose = require('mongoose')

const Categoria = mongoose.model('categorias')
const Cliente = mongoose.model('clientes')
const Compra = mongoose.model('compras')
const ListaCompra = mongoose.model('listaComprasRecorrente')
const Produto = mongoose.model('produtos')
const Subcategoria = mongoose.model('subCategorias')




//conectar mongo

    //DbContection()

    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/MapMarket", {
        
    }).then(()=>{
        console.log("Conectado bd")
    }).catch((err)=>{
        console.log("Erro de coneção mongodb " + err)
    })
    
    /*
    new Categoria ({
        idCategoria:1,
        nome: "categoria 01",
        descricao: "teste descrição"
    }).save().then(()=>{
        console.log("SALVO")
    })

    new Subcategoria({
        idSubCategoria: 1,
        nome: "subCat",
        Categoria: 1
    }).save().then(()=>{
       console.log("SubCat")
    })
    
    new Produto({
        idProduto: 1,
        nome: "biscoito",
        marca: "oreo",
        preco: 4.5,
        categoria: 1,
        subcategoria: 1
    }).save().then(()=>{
        console.log("PROD")
    })
    */
//rotas
    app.use('/user', user)

app.get("/", (req,res)=>{
    res.send("index")
    console.log(Produto.find({}))
})

app.listen(3000, ()=>{
    console.log("rodando")
})