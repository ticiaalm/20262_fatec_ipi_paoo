const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}
const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    }
}

/* GET /lembretes */
app.get('/lembretes', (req, res) => {
    res.json(baseConsulta)
})

/* POST /eventos */
app.post('/eventos', function(req, res) {
    const evento = req.body
    console.log(evento)
    funcoes[evento.tipo](evento.dados)
})

const port = 6000
app.listen(port, () => console.log(`Consulta na porta ${port}.`))