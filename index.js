const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({
    status: true,
    data: [{ name: "Abu Huraira" }, { name: "Abdul Muqeet" }],
  });
});

app.post("/users", (req, res) => {
  res.json({
    status: true,
    message: "Users added successfully",
  });
});

app.put('/users',(req,res)=>{
    res.json({
        status:true,
        message:"User updated successfully"
    })
})

app.patch('/users',(req,res)=>{
    res.json({
        status:true,
        message:"User field updated successfully"
    })
})

app.delete('/users',(req,res)=>{
    res.json({
        status:true,
        message:"User deleted successfully"
    })
})

app.listen(5000, () => {
  console.log("server is running");
});
