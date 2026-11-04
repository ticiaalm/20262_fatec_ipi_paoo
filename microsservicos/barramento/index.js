const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const eventos = []

/* POST /eventos */
app.post('/eventos', async (req, res) => {
    /* Pegar o corpo da requisição */
    const evento = req.body
    eventos.push(evento)
    console.log(evento)
    /* Enviar via post para todos os microsserviços */
    try {
        await axios.post('http://localhost:4000/eventos', evento)
    } catch(e){}
    try {
        await axios.post('http://localhost:5000/eventos', evento)
    } catch(e){}
    try {
        await axios.post('http://localhost:6000/eventos', evento)
    } catch(e){}
    try {
        await axios.post('http://localhost:7000/eventos', evento)
    } catch(e){}
    res.end()
})

app.get('/eventos', (req, res) => {
    const tipos = req.query.tipos
    if (!tipos) {
        res.json(eventos)
    }
    const eventosEspecificos = eventos.filter(
        evento => tipos.includes(evento.tipo)
    )
    res.json(eventosEspecificos)
})

const port = 10000
app.listen(port, () => console.log(`Barramento na porta ${port}.`))