const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/newdb7", { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err){
        console.log(err)
    } else{
        console.log('conexion succesful')
    }
});