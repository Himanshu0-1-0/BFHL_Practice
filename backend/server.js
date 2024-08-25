const express=require("express")
const mongoose =require("mongoose")

const app=express(); 
const PORT =process.env.PORT ||3000;


const router =require("./routes/basic") // router

mongoose.connect("mongodb://localhost:27017/Practice") 

app.use(express.urlencoded({extended:false})) //middleware
app.set('view engine','ejs') // views ejs
app.use(express.static("public")) // static files handling
app.use(express.json()); 

app.use("/",router);


app.listen(PORT,()=>{
    console.log("server running on PORT 3000");
})