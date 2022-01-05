const express = require('express')
const moment = require('moment')
const app = express()

const port = 3000


app.get('/', (req, res) => {
    console.log('Hello World!'+" 当前服务器时间为"+moment().format("YYYY-MM-DD-HH-mm-ss"));
    res.send('Hello World!'+" 当前服务器时间为"+moment().format("YYYY-MM-DD-HH-mm-ss"))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})