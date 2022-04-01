const express = require('express')
const db = require('./db/db')
const app = express()

//conectar mongo
    const mongoose = require('mongoose')
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost/MapMarket", {
        
    }).then(()=>{
        console.log("Conectado bd")
    }).catch((err)=>{
        console.log("Erro de coneção mongodb " + err)
    })


app.get("/", (req,res)=>{
    res.send("index")
})

app.listen(3000, ()=>{
    console.log("rodando")
})