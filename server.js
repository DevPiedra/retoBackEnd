// Importacion de Librerias
const express = require("express")
const request = require("request")
// Instacion de una app de express
const app = express()
// Configuracion para poder recibir datos en el body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Crear nuestro primer endpoint
app.get("/", function(req,res) {
    res.status(200).send("Prueba de Conexion")
})

app.get("/personas", function(req, res) {
    res.status(200).send({
        name: "Daniel",
        last_name: "Piedra",
        age: 35
    })
})

// Params
// http://localhost:3000/personas/ <----- el id
app.get("/personas/:id", function(req,res){
    res.status(200).send({
        mensaje: `El id buscando es ${req.params.id}`
    })
})

// Querys
// http://localhost:3000/search?raza=gatos&color=negro&vidas=6
app.get("/search", function(req,res) {
    res.status(205).send(req.query)
})

// POST : Crear Usuario con Post
app.post("/crear/usuario", function(req, res) {
    const user = {
        id: 15,
        name: req.body.nombre,
        last_name: req.body.apellido,
        age: req.body.edad,
        is_active: true
    }
    res.status(201).send(user)
})

// PUT or PATCH: Modificar

app.put("/modificar/usuario", function(req, res) {
    const usuarioModificado = {
        id: 15,
        name: req.body.nombre,
        last_name: req.body.apellido,
        age: req.body.edad,
        is_active: false
    }
    res.status(200).send(usuarioModificado)
})

app.listen(3000, function() {
    console.log("Esta aplicacion chuzisima se esta escuchando en el puerto 3000")
})