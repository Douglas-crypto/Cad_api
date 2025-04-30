// index.js (ou server.js, dependendo de qual arquivo você está usando)
import express from 'express';

const app = express();

app.get('/usuarios', (req, res) => {
    res.send('Deu bom!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});