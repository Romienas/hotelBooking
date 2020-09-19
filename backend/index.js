const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

mongoose.connect('mongodb://localhost/hotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api', require('./routes/room'))

app.listen(port, () => {
    console.log(`App listening at localhost:${port}`)
})