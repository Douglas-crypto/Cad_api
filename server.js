// index.js (ou server.js, dependendo de qual arquivo você está usando)
import express, { json } from 'express';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

const users = [];

app.post('/usuarios', (req, res) => {
    // Adiciona um novo usuário ao array de usuários
    users.push(req.body);

    res.status(201).json(req.body);
});

app.get('/usuarios', (req, res) => {

    res.status(200).json(users);
});

app.listen(3000, () => {
    // Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
});