// index.js (ou server.js, dependendo de qual arquivo você está usando)
import express from 'express';

const app = express();

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

const users = [];

app.post('/usuarios', (req, res) => {
    // Adiciona um novo usuário ao array
    console.log(req)

    res.send('Deu bom!');
});

app.get('/usuarios', (req, res) => {

    res.send('Deu bom!');
});

app.listen(3000, () => {
    // Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
});