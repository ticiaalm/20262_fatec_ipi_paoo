// Exibir todas as previsões do tempo para Itu usando Async/Await

// require('dotenv').config()
/* const axios = require('axios')
const appid = process.env.APPID
const q = "Itu"
const units = "metric" // graus celsius
const lang = "pt_BR"
const cnt = 3
const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`

axios.get(url)
.then(res => {
    console.log(res.data)
    console.log("************************")
    return res.data.list
})
.then((previsoes) => {
    for (let previsao of previsoes) {
        console.log(`
            ${new Date(+(previsao.dt) * 1000).toLocaleString()},
            Min: ${previsao.main.temp_min}\u00B0C,
            Max: ${previsao.main.temp_max}\u00B0C,
            Hum: ${previsao.main.humidity}%
            Descrição: ${previsao.weather[0].description},
            Sensação térmica: ${previsao.main.feels_like}
        `)
    }
    console.log("************************")
    return previsoes
})
.then((previsoes) => {
    const lista = previsoes.filter(p => p.main.feels_like >= 20)
    const total = lista.length
    console.log(`Total de previsões com sensação maior que 20: ${total}`)
}) */