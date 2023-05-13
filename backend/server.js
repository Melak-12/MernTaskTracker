const path= require('path')
const express = require('express');
const dotenv =require('dotenv').config();
const colors =require('colors')
const connectDB=require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler}=require('./middleware/errorMiddleware')
//insert cores
// const cors=require('cores')
connectDB();
const app =express();

app.use(express.json());
//cores
// app.use(cors())
app.use(express.urlencoded({extended:false}));

app.use('/api/goals',require('./routes/goRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

//serve frontend
/*
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))

    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','build','cindex.html')))
}
else{
    app.get('/' , (req , res)=>{
    
       res.send('set to prodctioin :)')
    
    })
}
*/

//try to accept client
/*app.get("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.send("API is runing wow..")
})

*/



console.log("ready for frontend")
app.use(errorHandler)

app.listen(port,()=>console.log(`server started at port ${port}`.blue))
