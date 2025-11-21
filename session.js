const express = require("express")
const session = require("express-session")
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

//session middleware
app.use(session({
    secret:'mysecretKey', // used to sign the cookie
    resave:false, // not saving sessions if unmodified
    saveUninitialized : true // save new sessions
}))

//route to set the session
app.get('/set', (req, res) => {
    req.session.username = "ABC"
    req.session.dept = "cse"
    res.send("Session is set!")
})
//route to get the session
app.get('/get', (req, res) => {
    if(req.session.username){
        res.send(`
            Username : ${req.session.username} <br>
            Department : ${req.session.dept}
            `)
    }else{
        res.send("No session is found")
    }
})
//destroy session
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send("Session destroyed!")
})
// start server 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/set`);
    // console.log(`Server is running at http://localhost:${port}/get`);
    // console.log(`Server is running at http://localhost:${port}/logout`);
})