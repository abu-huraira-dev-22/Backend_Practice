const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config;
dotenv()
const app = express();

app.use(express.json());

app.use(morgan("tiny"));

let users = [];

app.get("/users", (req, res) => {
  res.json({
    status: true,
    message: "All Users Data",
    data: users,
  });
});

app.get("/users/:userName", (req, res) => {
  const { userName } = req.params;
  res.json({
    status: true,
    message: "Single User Data",
    data: users.filter((user) => user.userName == userName),
  });
});

app.put("/users/:userName", (req, res) => {
  const { userName } = req.params;
  users = users.map((user) => {
    if (user.userName == userName) {
      user = req.body;
      return user;
    }
    return user;
  });
  res.json({
    status: true,
    message: "User data updated successfully",
  });
});

app.delete("/users/:username", (req, res) => {
  const { userName } = req.body;
  users = users.filter((user) => {
    return user.userName !== userName;
  });
  res.json({
    status: true,
    message: "User data deleted successfully",
  });
});

app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  res.json({
    status: true,
    message: "Users Added Successfully",
  });
});

app.listen(process.env.PORT, () => {
  console.log("server is running on the port of " + process.env.PORT);
});
