import express from "express";
import dotenv from "dotenv";
const __dirname = import.meta.dirname;

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/whoami", (req,res)=>{
  res.json({ipaddress: req.ip, language: req.acceptsLanguages(), software: req.get('User-Agent')})
})
app.listen(PORT);
console.log(`Server is listening to port ${PORT}`);
