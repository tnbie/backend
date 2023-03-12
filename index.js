const express = require('express');
const { json } = require('express/lib/response');

const app = express();

// rota home
app.get("/", (req, res) =>{
    res.json({
        message: "Olá"
    });
});

const PORT = 3000

app.listen(process.env.PORT || PORT,() =>{
    console.log('Estou rodando na porta ' + PORT)
}); 

