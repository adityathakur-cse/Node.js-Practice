const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const { hasIn } = require('lodash');
const { weekdaysMin } = require('moment');
const port = 3000;

app.use(cookieParser());

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h2>Cookie Demo</h2>
        <a href="/setcookie">Set Cookie</a><br>
        <a href="/getcookie">Get Cookie</a><br>
        <a href="/clearcookie">Clear Cookie</a>
    `);
});
// set a cookie
app.get('/setcookie', (req, res) => {
    res.cookie('user', 'abc', { maxAge: 60000 });
    res.cookie('password', '11234', { maxAge: 60000 });

    res.send(`cookie has been set`);
});

app.get('/getcookie', (req, res) => {
    res.send(`
        user cookie : ${req.cookies.user} <br>
        password cookie : ${req.cookies.password}
    `);
});

app.get('/clearcookie', (req, res) => {
    res.clearCookie('user');
    res.clearCookie('password');
    res.send("cookie cleared");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
