const express = require('express');
const ejs = require('ejs');
const path = require('path')



const app = express()

// Middlewares 


// set templating engine as ejs
app.set('views',path.join(__dirname,'frontEnd/views'));
app.set('view engine', 'ejs');

// serve static frontend pages
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'frontEnd')))

// home route

app.get('/',(req,res)=>{
    res.render('index')
})

// donate book route
app.get('/DonateBook',(req,res)=>{
    res.render('donateBook')
})
app.get('/SignIn',(req,res)=>{
    res.render('registerSignIn')
})
app.get('/Register',(req,res)=>{
    res.render('registerSignIn')
})
app.listen(3000,()=>{
           console.log('App is running in port 3000')
           })