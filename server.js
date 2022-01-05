const express = require('express')
const moment = require('moment')
const app = express()
app.use(express.static('public'));

const port = 3000





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})