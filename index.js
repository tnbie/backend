const express = require('express');
const { json } = require('express/lib/response');

const app = express();

// rota home
app.get("/", (req, res) =>{
    res.json({
        message: "Olá"
    });
});

app.get("/products", (req, res) =>{
    res.json([
        {nome: 'celular'},
        {nome: 'tv'},
        {nome: 'sofá'}
    ])
})

const PORT = 3000

app.listen(process.env.PORT || PORT,() =>{
    console.log('Estou rodando na porta ' + PORT)
}); 

