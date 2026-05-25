const express= require('express')
const app = express()
app.use(express.json())

const users = []

app.get('/users',(req,res)=>{
    res.json({
        status:true,
        message:"All Users Data",
        data:users
    })
})

app.post('/users',(req,res)=>{
    const data = req.body
    users.push(data)
    res.json({
        status:true,
        message: "Users Added Successfully"
    })  
})

app.listen(5000,()=>{
    console.log('server is running')
})