const express = require('express')
const session = require('express-session')
const { extend } = require('lodash')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true})) //middleware
//session setup
app.use(session({
    secret : 'mysecretkey', // used to sign the session ID cookie
    resave : false,
    saveUninitialized : true
}))
// Home page route
app.get('/', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <input type="text" name="username" placeholder="Enter Username" />
            <button type="submit">Login</button>
        </form>
        <br>
        <a href="/profile">GO TO PROFILE</a>
    `)
})

// Login route
app.post('/login', (req, res) => {
    req.session.user = req.body.username
    res.send(`Welcome ${req.session.user}`)
})
// Profile route
app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.send("Access Denied. Please login first.");
    }

    res.send(`
        <h2>Welcome to your profile, ${req.session.user}</h2>
        <a href="/logout">Logout</a>
    `)
})
// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send("Logged out successfully.")
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})