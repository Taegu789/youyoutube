import express from "express";

const app = express();

const handleListening = () => console.log("Server listening on port 4000 Man~");

app.listen(4000, handleListening);
