const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

/* 
{
    1: [
        {
            id: 1001,
            texto: 'Comprar café'
            lembreteId: 1
        },
        {
            id: 1002,
            texto: 'Ir à feira',
            lembreteId: 1
        }    
    ],
    2: [
        {
            id: 2001,
            texto: 'Ver um filme',
            lembreteId: 2
        }
    ],
    3: [
        {}
    ]    
}
*/
const observacoes = {}

/* POST /lembretes/1/observacoes */
app.post('/lembretes/:id/observacoes', (req, res) => { // path
    const idObs = uuidv4()
    // const texto = req.body.texto
    const { texto } = req.body
    const observacao = {
        id: idObs,
        texto: texto
    }
    const observacoesDoLembrete = observacoes[req.params.id] || []
    observacoesDoLembrete.push(observacao)
    observacoes[req.params.id] = observacoesDoLembrete
    res.json(observacoesDoLembrete)
})

/* GET /lembretes/1/observacoes */
app.get('/lembretes/:id/observacoes', function(req, res) {
    res.json(observacoes[req.params.id] || [])
})

const port = 5000
app.listen(port, () => console.log(`Observações na porta ${port}.`))