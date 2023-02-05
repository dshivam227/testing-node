const express= require("express");
const app=express();
const path= require("path");
const port=8000;
const hbs= require('hbs');


// console.log();
const staticPath=path.join(__dirname,"public");
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("Hello World from the server ");

})

app.get("/about",(req,res)=>{
    res.send("Hello World from the about server ");

})
app.get("/temp",(req,res)=>{
    res.send("Hello World from the temp server ");

})
app.get("/mad",(req,res)=>{
    res.send("Hello World from the mad server ");

})
app.get('*',(req,res)=>{
    res.send("404 error page not found");
})
app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})