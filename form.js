var session = require('cookie-session')
var express = require('express')
var app = new express()
const port = 3000

app.use(express.urlencoded({extended:true}))

//cookie-session middleware
app.use(session({
    name: "mysession",
    keys: ['secretKey123'],
    maxAge: 24 * 60 * 60 * 1000 //24hrs
}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/form.html")
})

//save the data
app.post("/login", (req, res) => {
    req.session.username = req.body.username
    res.send(`Login stored in the cookie! <a href='/profile'>GO TO PROFILE</a>`)
})

//profile page
app.get('/profile', (req, res) => {
    if (!req.session.username) {
        return res.send(`NO SESSION FOUND <a href='/'>LOGIN AGAIN</a>`)
    }

    res.send(`Welcome ${req.session.username}!
        <br>
        <a href='/logout'>LOGOUT!</a>
        `)
})

//logout
app.get('/logout', (req, res) => {
    req.session = null
    res.send(`Logged out successfully! <a href='/'>LOGIN AGAIN</a>`)
})

//start server 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//TASK
// Create a social media platform in which 
// User should be able to register
// Session should be used in such a way that user should be remembered
// User should have profile page to check all details
// At the end, give an option to delete account