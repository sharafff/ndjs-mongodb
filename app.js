const express  =require("express");
const app = express()
const db = require('./config/database')
//bring ejs templates

app.set('view engine','ejs')
// bring static folder 'public'
app.use(express.static('public'))
// app.use(express.static('views/media'))
app.use(express.static('node_modules'))

//connect to database : 

//app.get('/', (req, res)=>res.send("hey world"));


const events= require('./routes/events')
app.use('/', events)

app.listen(3000, ()=> {  
    console.log("success")
});