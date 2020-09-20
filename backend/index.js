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

//set /api to url to all api calls
app.use('/api', require('./routes/room'))

//handle error messages
app.use((err, req, res, next) => {
    res.send(err)
})

app.listen(port, () => {
    console.log(`App listening at localhost:${port}`)
})