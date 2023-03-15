const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Seja bem vindo ao app!")
})
app.get("/sobre", function(req,res){
    res.send("Minha pag sobre")
})
app.get("/blog", function(req,res){
    res.send("Minha pag blog")
})
app.listen(6969, function(){
    console.log("Servidor rodando na url http://localhost:6969")
})