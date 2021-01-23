const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    date:{
        type:Date, 
        required: true,
        default: Date.now
    }

})

let Event = mongoose.model('Event', eventSchema, 'events')
module.exports = Event 