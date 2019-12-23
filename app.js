const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');
// Import Routes
const signInRoute = require('./routes/signIn')


const app = express()


// set templating engine as ejs
app.set('views',path.join(__dirname,'frontEnd/views'));
app.set('view engine', 'ejs');

// serve static frontend pages
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'frontEnd')))


// ROUTES

// home route
app.get('/',(req,res)=>{
    res.render('index')
})

// Sign In and Register Routes
app.use('/signIn', signInRoute);
app.use('/Register', signInRoute)

// Connect to DataBase
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true},()=>{
        console.log('Connected to DataBase')         
})



// donate book route
app.get('/DonateBook',(req,res)=>{
    res.render('donateBook')
})
app.get('/SignInPage',(req,res)=>{
    res.render('registerSignIn')
})
app.get('/RegisterPage',(req,res)=>{
    res.render('registerSignIn')
})
app.listen(3000,()=>{
           console.log('App is running in port 3000')
           })