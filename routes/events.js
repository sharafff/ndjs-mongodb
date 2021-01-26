const express =require("express")
const router = express.Router()
const Event = require('../models/Event')
var bodyParser = require('body-parser')
//add express validator
const { check, validationResult } = require('express-validator/check')


router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

//router create (get and post)


router.get('/create',(req,res)=>{
    res.render('event/create',{
        errors: req.flash('errors')
    })
})

router.post('/create',[
    check('name').isLength({min: 5}).withMessage('Name should be more than 5 char'),
    check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
    check('post').isLength({min: 3}).withMessage('Job should be more than 5 char'),
    

],(req, res)=>{
   
    const errors = validationResult(req)
    if(!(errors.isEmpty())){
        req.flash('errors',errors.array())
        
        res.redirect('/create')
    }else{ 
        let newEvent = new Event({
            name: req.body.name ,
            post: req.body.post ,
            description: req.body.description ,
            creation: req.body.created ,
    
                                    })
        newEvent.save( (err)=>{ 
        if(!err){
            //console.log(req.body)
            req.flash('info', 'added succesfully')
            Event.findOne({_id: newEvent.id},(err,event)=>{
                console.log(event)
                res.render('event/show',{
                    event : event,
                    message: req.flash('info'),
                })
            })
        } else {console.log("error to add events")}
    
        })}
    
    
    //
  })


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
        //console.log(event)
        res.render('event/show',{
            event : event,
            message:req.flash('edit_info')
        })
    })
    
})




router.get('/edit',(req,res)=>{
    res.render('event/edit')
})
router.get('/login',(req,res)=>{
    res.render('event/login')
})

//edit route 
router.get('/edit/:id', (req,res)=> {

    Event.findOne({_id: req.params.id}, (err,event)=> {
        
        if(!err) {
       
         res.render('event/edit', {
             event: event,
             
             errors: req.flash('errors'),
             message: req.flash('info')
         })
 
        } else {
            console.log(err)
        }
     
     })

})
//update route 


// router.post('/update',[
//     check('name').isLength({min: 5}).withMessage('Name should be more than 5 char'),
//     check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
//     check('post').isLength({min: 3}).withMessage('Job should be more than 5 char'),
    

// ],(req,res)=>{
    
//     const errors = validationResult(req)
//     if(!(errors.isEmpty())){
//         req.flash('errors',errors.array())
//         //console.log(req.body.id)
//         console.log(_id)
    
//     }else{
//         console.log("updated successfully")}
// })

router.post('/update',[
    check('name').isLength({min: 5}).withMessage('Title should be more than 5 char'),
    check('description').isLength({min: 5}).withMessage('Description should be more than 5 char'),
    check('post').isLength({min: 3}).withMessage('Location should be more than 5 char'),
    

], (req,res)=> {
    
    const errors = validationResult(req)
    if( !errors.isEmpty()) {
       
        req.flash('errors',errors.array())
        
        res.redirect('/edit/' + req.body.id)
    } else {
       // crete obj
       let newEvent={
           name : req.body.name,
           post : req.body.post,
           description: req.body.description,
           date:req.body.date,
       }
       let query = {_id:req.body.id}
       Event.updateOne(query,newEvent,(err)=>{
            if(!err){
                req.flash('edit_info', 'Edited succesfully')
                res.redirect('/events/'+req.body.id)
            }
            else{
                console.log(err)
            }
       })
    }
   
})


module.exports =router