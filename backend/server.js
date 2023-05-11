const path= require('path')
const express = require('express');
const dotenv =require('dotenv').config();
const colors =require('colors')
const connectDB=require('./config/db')
const port = process.env.PORT || 5000
const {errorHandler}=require('./middleware/errorMiddleware')
connectDB();
const app =express();

app.use(express.json());
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
app.use(errorHandler)

app.listen(port,()=>console.log(`server started at port ${port}`.blue))
