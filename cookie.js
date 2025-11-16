const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

app.use(cookieParser())

//set a cookie
app.get('/setcookie',(req,res)=>{
    res.cookie('user','abc',60000)//cookie is set for one minute
    res.cookie('password','11234',60000)//cookie is set for one minute
    res.send(
        `cookie has been set`
    );
})
app.get('/getcookie',(req,res)=>{
    res.send(
        `user cookie : ${req.cookies.user}
        password cookie : ${req.cookies.password}`
    )
})
app.get('/clearcookie',(req,res)=>{
    res.clearCookie('user');
    res.clearCookie('password');
    res.send("cookie cleared");
})
app.listen(3000,()=>{

})