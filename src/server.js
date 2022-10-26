import express from "express";

const PORT = 5000;

const app = express();

const gossipMiddleWare = (req, res, next) => {
  console.log("Someone is going to : ${req.url}");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};
app.use(gossipMiddleWare);
//미들웨어 순서 유의 use - > get
app.get("/", gossipMiddleWare, handleHome);

const handleLogin = (req, res) => {
  return res.send("Have a nice lunch!!");
};

const handleListening = () =>
  console.log("Server listening on http://localhost:${PORT}");

app.get("/login", handleLogin);

app.listen(PORT, handleListening);
