const express=require("express")
const cors = require('cors');
const app=express(); 
const PORT =process.env.PORT ||5000;

// app.use(cors)
const corsOptions = {
    origin: '*', // Allow requests from this origin
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

const router =require("./routes/basic") // router


app.use(express.urlencoded({extended:false})) //middleware
app.set('view engine','ejs') // views ejs
app.use(express.static("public")) // static files handling
app.use(express.json()); 


app.use("/",router);


app.listen(PORT,()=>{
    console.log("server running on PORT 5000");
})