const express = require('express')
const app =express()
app.use(express.json())

app.post('/',(req,res)=>{
    const{name,profession,subjects} =req.body
    res.json({
        status:true,
        message:"Received data from frontend successfully"
    })
    console.log("name ==>>",name)
    console.log("profession ==>>",profession)
    console.log("subjects ==>>",subjects)
})

app.listen(3000,()=>{
    console.log('server is running')
})