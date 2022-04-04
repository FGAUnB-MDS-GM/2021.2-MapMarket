const mongoose = require('mongoose')

require('../model/Cliente')
const Cliente = mongoose.model('clientes')

module.exports = {
    create: (req, res) => {
        Cliente.create({
            nome: req.body.nome,
            email: req.body.email,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            cep: req.body.cep,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            numero: req.body.numero,
            complemento: req.body.complemento
        }).then(()=>{
            res.statusCode = 201
            res.send("cadastrado")
            console.log("cadastrado")
        }).catch(()=>{
            res.statusCode = 400
        })    
    },

    list: () => null,

}