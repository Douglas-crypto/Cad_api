import express from 'express';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON

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

app.get('/usuarios', async (req, res) => {
    let users = [];

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            },
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
});


app.put('/usuarios/:id', async (req, res) => {
    // Adiciona um novo usuário ao array de usuários
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    });
    
    res.status(201).json(req.body);
});

app.delete('/usuarios/:id', async (req, res) => {
    // Adiciona um novo usuário ao array de usuários
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });
    
    res.status(200).send({menssagem: 'Usuário deletado com sucesso!'}); 
})

app.listen(3000, () => {
    // Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
});