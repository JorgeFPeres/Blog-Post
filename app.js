// Carregando os módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const { Console } = require('console')
// const mongoose = require('mongoose')
const app = express()
const admin = require('./routes/admin')
const path = require("path")

// Configurações 
    // BodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongoose
        //Em breve
    // Public
        app.use(express.static(path.join(__dirname, "public")))

// Rotas
    app.use('/admin', admin)

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando")
})
