const express  =require("express");
const app = express()
const db = require('./config/database')
//bring ejs templates

const session=require('express-session')
const flash = require('connect-flash')

app.set('view engine','ejs')
// bring static folder 'public'
app.use(express.static('public'))
// app.use(express.static('views/media'))
app.use(express.static('node_modules'))


//session and flash config 
app.use(session({
    secret:'achraf',
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:6000 *15}
}))

app.use(flash())
//app.get('/', (req, res)=>res.send("hey world"));


const events= require('./routes/events')
app.use('/', events)

app.listen(3000, ()=> {  
    console.log("success")
});