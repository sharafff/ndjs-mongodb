const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    post:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    creation:{
        type: Date,
        required:true,
        default: Date,
    },
    
})

let Event = mongoose.model('event', eventSchema, 'events')
module.exports = Event 
