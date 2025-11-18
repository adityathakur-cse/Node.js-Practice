const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(cookieParser()); // middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/cookie.html');
});

app.post('/setcookie', (req, res) => {
    const theme2 = req.body.theme1;
    res.cookie('theme', theme2);
    res.send(`theme set for ${theme2} <a href='/getcookie'>Get cookie</a>`);
});

app.get('/getcookie', (req, res) => {
    const theme3 = req.cookies.theme;
    res.send(`cookie fetched and it is ${theme3} <a href='/clearcookie'>Clear cookie</a>`);
});

app.get('/clearcookie', (req, res) => {
    res.clearCookie('theme');
    res.send("cookie cleared <a href='/'>Home</a>");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});