const express = require('express')
const router = express.Router()

const Rooms = require('../models/room')

//Add hotel room to database
router.post('/addRoom', (req, res, next) => {
    Rooms.create(req.body)
    .then(() => {
        res.send({
            message: 'Room added successfully'
        })
    })
    .catch(next)
})

//Delete room from database
router.delete('/removeRoom/:id', (req, res, next) => {
    let roomId = req.params.id
    Rooms.findByIdAndRemove({_id: roomId})
    .then( () =>{
        res.send({
            message: 'Room removed successfully'
        })
    })
    .catch(next)
})

module.exports = router