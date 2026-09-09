const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

/* POST /eventos */
app.post('/eventos', (req, res) => {
    /* Pegar o corpo da requisição */
    const evento = req.body
    /* Enviar via post para todos os microsserviços */
    axios.post('http://localhost:4000/eventos', evento)
    axios.post('http://localhost:5000/eventos', evento)
    res.end()
})

const port = 10000
app.listen(port, () => console.log(`Barramento na porta ${port}.`))