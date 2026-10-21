const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const palavra = 'Importante'
const funcoes = {
    ObservacaoCriada: (observacao) => {
        /* if (observacao.texto.includes(palavra)) {
            observacao.status = palavra
        } else {
            observacao.status = 'Comum'
        } */
       observacao.texto.includes(palavra) ? 'Importante' : 'Comum'
        axios.post('http://localhost:7000/eventos', {
            tipo: 'ObservacaoClassificada',
            dados: observacao
        })
    }
}

app.post('/eventos', (req, res) => {
    try {
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    } catch(e){}
    res.end()
})

const port = 7000
app.listen(port, () => {
    console.log(`Classificação na porta ${port}.`)
})