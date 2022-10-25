import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>dont give up!!</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Have a nice lunch!!");
};

// 첫번쨰 칸은 선언, 두번째는 반응. 이 법칙을 기억하쇼!
app.get("/", handleHome);
app.get("/login", handleLogin);

// login에 입장하면 handlelogin을 작동
//()이라는 함수를 넣어주어야 처리가 됨
// ()=> 의 뜻. 이 함수시 console.log를 해주라.

const handleListening = () =>
  console.log("Server listening on http://localhost:${PORT}");

app.listen(PORT, handleListening);

// app.get 과 app.listen의 형식은 같다. port나 / , 그리고 그 뒤엔 함수
// 뒤에 /lalalalala 붙이면 갈수 있지만 기본 홈은 절대 갈수가 업승ㅁ -> 브라우저가 get/request 보내고 있기에.

// const handleClick = (event) => {

// }

// b.addEventListener("click", handleClick)
