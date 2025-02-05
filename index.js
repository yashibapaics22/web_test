const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Noteroutes = require('./routes/note');

mongoose.connect('mongodb://127.0.0.1:27017/web-test')
.then(()=>{
    console.log("DB connected sucessfully");
})
.catch((err)=>{
    console.log("Db not connected");
    console.log(err);
})


app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));      
app.use(methodOverride('_method'));  


//routes
app.use(Noteroutes);


//port
app.listen(8000,()=>{
    console.log("server connected successfully");    
})