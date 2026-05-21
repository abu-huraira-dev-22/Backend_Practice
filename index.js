const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log("Get request is running")
    res.send("Welcome to our home page")
})

app.get('/about',(req,res)=>{
    console.log("about page is running")
    res.send("Welcome to our about page")
})

app.listen(5000,()=>{
    console.log("server is running")
})