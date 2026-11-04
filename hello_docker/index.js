const express = require('express')
const app = express()

app.get('/hey-docker', (req, res) => {
    res.json({
        mensagem: 'Hey, Docker!'
    })
})

const port = 5200
app.listen(port, () => {
    console.log('Up and running inside a docker container!')
})