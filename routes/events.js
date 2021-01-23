const express =require("express")
const router = express.Router()
const Event = require('../models/Event')

//router.set('view engine', 'ejs'); 
router.get('/', (req,res)=>{
    Event.find({title:"hello"}, (err,events)=>{
        res.json(events)
    })
    //res.render('event/index')
})
router.get('/:event', (req,res)=>{
    res.render('event/show')
})
router.get('/login', (req,res)=>{
    res.render('event/login')
})


module.exports =router