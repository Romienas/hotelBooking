const express = require('express')
const router = express.Router()

//Add hotel room to database
router.post('/addRoom', (req, res, next) => {
    res.send(req.body)
})

module.exports = router