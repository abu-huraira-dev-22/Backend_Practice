const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log("Get request is running")
})

app.get('/about',(req,res)=>{
    console.log("about page is running")
})

app.listen(5000,()=>{
    console.log("server is running")
})