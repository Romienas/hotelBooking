const mongoose = require('mongoose')
const Schema = mongoose.Schema

//bathroom facilities
const bathroomShema = new Schema({
    freeToiletries: Boolean,
    bathrobe: Boolean,
    toilet: Boolean,
    bath: Boolean,
    shower: Boolean,
    towels: Boolean,
    slippers: Boolean,
    hairdryer: Boolean,
    toiletPaper: Boolean
})

//Room views
const viewSchema = new Schema({
    city: Boolean,
    garden: Boolean,
    sea: Boolean
})

//Room facilities
const roomFacSchema = new Schema({
    linen: Boolean,
    closet: Boolean,
    coffeeMaker: Boolean,
    minibar: Boolean,
    airConditioner: Boolean,
    iron: Boolean,
    heating: Boolean,
    desk: Boolean,
    tv: Boolean,
    phone: Boolean,
    flatTV: Boolean
})

//Main room schema
const roomSchema = new Schema({
    roomType: {
        type: String,
        required: [true, 'Room Type is required']
    },
    sleeps: {
        type: Number,
        require: [true, 'Must set number of quests']
    },
    description: {
        type: String,
        require: false
    },
    roomSize: {
        type: Number,
        require: [true, 'Must set size of room']
    },
    batroomFacilities: bathroomShema,
    view: viewSchema,
    roomFacilities: roomFacSchema
})

const Rooms = mongoose.model('rooms', roomSchema)

module.exports = Rooms