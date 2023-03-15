const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})
app.get('/ola/:nome/:cargo',function(req, res){
    res.send("<h1>Ola " +req.params.nome + "</h1>"+"<h2> Voce quer ser um  "+ req.params.cargo + "</h2>" )
})
app.listen(6969, function(){
    console.log("Servidor rodando na url http://localhost:6969")
})