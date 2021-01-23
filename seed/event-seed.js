const db = require('../config/database')

const Event =require('../models/Event')

let newEvents = [

    new Event({
        title: 'Achraf CHAFAA',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        Project: 'Robotic engineer',
        date: Date.now(),
        
    }),
    new Event({
        title: 'Sara charfoune',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        project: 'mechatronixs engineer',
        date: Date.now(),
        
    }),
    new Event({
        title: 'hamid l mardi',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        poject: 'Muscat',
        date: Date.now()
        
    }),
    
    
]

newEvents.forEach((event)=>
    event.save((err)=>{
    if(!err){
        console.log('addes succesfully')
    } else{
        console.log(err)
    }
})
)
