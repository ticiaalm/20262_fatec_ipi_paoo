const axios = require('axios')
const express = require('express')
const app = express()
/* Middleware: Fica entre o envio da req e res */
app.use(express.json())
/* 
{
    1: {
        id: 1,
        texto: "Fazer café"
    },
    2: {
        id: 2,
        texto: "Ir à feira"
    }
}
*/
let id = 1
const lembretes = {}
/* API (Application Programming Interface): Coleção de endpoints */

/* Criar um lembrete */
/* POST /lembretes */
/* Endpoint: uma tripla: método do protocolo HTTP, padrão de acesso e funcionalidade */
app.post('/lembretes', async (req, res) => {
    /* { texto: "Fazer café" } */
    const texto = req.body.texto
    const lembrete = {
        id: id,
        texto: texto
    }
    lembretes[id] = lembrete
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete
    })
    id++
    res.json({mensagem: 'ok'})
})

/* GET /lembretes usando uma função regular (function) */
app.get('/lembretes', function(req, res) {
    res.json(lembretes)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

/* app.delete('/lembretes/:id', async (req, res) => {
    const lembrete = req.body
    delete lembretes[lembrete.id]
    await axios.post('http://localhost:1000/eventos', {
        tipo: 'LembreteDeletado',
        dados: lembrete
    })
    res.json({mensagem: 'ok'})
}) */

const port = 4000
app.listen(port, () => console.log(`Lembretes na porta ${port}.`))