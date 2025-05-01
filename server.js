import express from 'express';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

const users = [];

 app.post ('/usuarios', async (req, res) => {
    // Adiciona um novo usuário ao array de usuários
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
    
        }    })

    res.status(201).json(req.body);
});

app.get('/usuarios', (req, res) => {

    res.status(200).json(users);
});

app.listen(3000, () => {
    // Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
});