const db = require('../config/database')

const Event =require('../models/Event')

let newEvents = [ 
    new Event({
        name: "Achraf Chafaa",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        post:"Robotic Engineer",
        
    }),
    new Event({
        name: "Sara Charfoune",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        post:"Mechatronic Engineer",
    }),
    new Event({
        name: "Youssef Charfoune",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        post:"Gamer",
    }),
]

newEvents.forEach( (event)=> {
    event.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})
