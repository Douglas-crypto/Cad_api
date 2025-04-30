import express from 'express'

const app = express()

const users = []

app.post('/usuario', (req, res) => {

    console.log(req)

    res.status(201).json({
        message: 'Usuario criado com sucesso'
    })

})

app.get('/usuario', (req, res) => {

    app.send('Hola Mundo')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})