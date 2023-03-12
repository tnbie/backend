const express = require('express');
const cors = require('cors');
const { json } = require('express/lib/response');
const app = express();

app.use(cors());

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
        {nome: 'sofá'},
        {nome: 'cama'},
        {nome: 'pc'},
        {nome: 'gps'}
    ])
})

const PORT = 3000

app.listen(process.env.PORT || PORT,() =>{
    console.log('Estou rodando na porta ' + PORT)
}); 

