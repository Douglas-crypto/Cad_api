import express from 'express'

const app = express()

app.get('/usuario', (req, res) => {

    app.send('Hola Mundo')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})