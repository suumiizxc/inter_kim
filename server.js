const express = require("express");
const path = require("path");
const app = express();
const ip = 'localhost';
const port = 3002;

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

app.get("/visual/chart2", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart2.html"))
})

app.get("/visual/chart3", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart3.html"))
})

app.get("/visual/chart4", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart4.html"))
})

app.get("/visual/chart5", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart5.html"))
})

app.get("/visual/chart6", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart6.html"))
})

app.get("/visual/chart7", (req, res)=>{
    res.sendFile(path.join(__dirname + "/charts/chart7.html"))
})

app.listen(port,ip, ()=> {
    console.log(`Server running http://localhost:${port}`);
})
