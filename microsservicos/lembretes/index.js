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
app.post("/lembretes", (req, res) => {
    /* { texto: "Fazer café" } */
    const texto = req.body.texto
    lembretes[id] = {
        id: id,
        texto: texto
    }
    id++
    res.json({mensagem: 'ok'})
})
/* GET /lembretes usando uma função regular (function) */
app.get("/lembretes", function(req, res) {
    res.json(lembretes)
})
const port = 4000
app.listen(port, () => console.log(`Lembretes na porta ${port}.`))