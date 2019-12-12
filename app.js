const express = require('express');
const ejs = require('ejs');
const path = require('path')


const app = express()

// Middlewares 

// set templating engine as ejs
app.set('views',path.join(__dirname,'frontEnd/views'));
app.set('view engine', 'ejs');

// serve staic frontend pages
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'frontEnd')))

// home route

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
           console.log('App is running in port 3000',path.join(__dirname,'frontEnd/views'))
           })