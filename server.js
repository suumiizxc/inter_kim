const express = require("express");
const path = require("path");
const app = express();
const ip = 'localhost';
const port = 3001;

app.use(express.static(__dirname))
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/interview_mn.html"))
})

app.get("/en", (req, res)=> {
    res.sendFile(path.join(__dirname + "/interview_en.html"))
})

app.get("/mn", (req,res)=>{
    res.sendFile(path.join(__dirname + "/interview_mn.html"))
})

app.get("/visual/chart1", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart1.html"))
})
app.listen(port,ip, ()=> {
    console.log(`Server running http://localhost:${port}`);
})
