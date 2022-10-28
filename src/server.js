import express from "express";

const PORT = 5000;

const app = express();

const logger = (req, res, next) => {
  console.log("${req.method} ${req.url}");
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1> Not Allowed </h1>");
  }
  //protected 인걸 확인하면 not allowed 포르텍티드 아니면 next
  console.log("Allowed, you may continue.");
  next();
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
const handleLogin = (req, res) => {
  return res.send("Have a nice lunch!!");
};

const handleListening = () =>
  console.log("Server listening on http://localhost:${PORT}");

app.get("/login", handleLogin);

app.listen(PORT, handleListening);
