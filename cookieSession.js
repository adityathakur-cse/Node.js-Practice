var session = require('cookie-session')
var express = require('express')
var app = new express()
const port = 3000
app.use(session({
    name:"session",
    keys:['secret-key'],
    maxAge:5*60*1000
}))
app.get('/set-session', (req, res) => {
    req.session.user = "abc"
    req.session.city = "xyz"
    res.send(`session set! <a href="/get-session">GET SESSION</a>`)
})
app.get('/get-session', (req, res) => {
    var user = req.session.user
    var city = req.session.city
    res.send(`stored session for ${user} and ${city}
        session set! <a href="/delete-session">DELETE SESSION</a>`)
})
app.get('/delete-session',(req,res)=>{
    req.session = null
    res.send(`Session is destroyed! <a href="/set-session">SET SESSION</a>`)
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/set-session`);
});