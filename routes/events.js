const express =require("express")
const router = express.Router()
const Event = require('../models/Event')

//router.set('view engine', 'ejs'); 
router.get('/', (req,res)=>{
    Event.find({}, (err,events)=>{
    let chunk =[]
    let chunkSize = 3 

    for(let i = 0 ; i<events.length; i+=chunkSize){
        chunk.push(events.slice(i,chunkSize+i))
    }
    res.render('event/index', {
        chunk : chunk,

    })
    //res.json(chunk)
    })
})
router.get('/events/:id', (req,res)=>{
    //console.log(req.params.id)
    Event.findOne({_id: req.params.id},(err,event)=>{
        console.log(event)
        res.render('event/show',{
            event : event,
        })
    })
    
})
router.get('/users/login', (req,res)=>{
    res.render('event/login')
})
router.get('/create', (req,res)=>{
    res.render('event/create')
})


module.exports =router