const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const port = 3000;

app.use(cookieParser());
//set cookie
app.get('/set-cookie',(req,res)=>{
    res.cookie('theme','dark')
    res.send(`cookie for theme has been stored`)
})
//get cookie
app.get('/get-cookie',(req,res)=>{
    var cookiename = req.cookies.theme
    res.send(`The cookies is ${cookiename}`)
})
//delete cookie
app.get('/delete-cookie',(req,res)=>{
    res.clearCookie('theme')
    res.send("Cookie is cleared")
})

//start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/set-cookie`);
    // console.log(`Server is running at http://localhost:${port}/get-cookie`);
    // console.log(`Server is running at http://localhost:${port}/delete-cookie`);
})