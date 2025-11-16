const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser());

app.get('/setcookie',(req,res)=>{
    res.cookie('theme','dark')
    res.send(`cookie for theme has been stored`)
})
app.listen(3000,()=>{
    
})