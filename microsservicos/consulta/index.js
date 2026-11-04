const axios = require('axios')
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
    },
    /* LembreteDeletado: (id) => {
        delete baseConsulta[id]
    } */
   ObservacaoAtualizada: (observacao) => {
    const observacoes = baseConsulta[observacao.lembreteId]['observacoes']
    const aux = observacoes.findIndex(o => o.id === observacao.id)
    observacoes[aux] = observacao
   }
}

/* GET /lembretes */
app.get('/lembretes', (req, res) => {
    res.json(baseConsulta)
})

/* POST /eventos */
app.post('/eventos', function(req, res) {
    try {
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    } catch(e){}
    res.end()
})

const port = 6000
app.listen(port, async () => {
    console.log(`Consulta na porta ${port}.`)
    const tiposEspecificos = [
        'LembreteCriado',
        'ObservacaoCriada',
        'ObservacaoAtualizada'
    ]
    try {
        const resp = await axios.get('http://localhost:10000/eventos', {
            params: {
                tipos: tiposEspecificos.join(',')
            }
        })
        resp.data.forEach((evento, indice, colecao) => {
            try {
                funcoes[evento.tipo](evento.dados)
            } catch(e){}
        })
    } catch(e){}
})