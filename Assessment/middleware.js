const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            Enter Name :
            <input name="name" type="text" />
            <button type="submit">SUBMIT</button>
        </form>
    `);
});
app.post('/submit', (req, res) => {
    if (req.body.name == 'admin') {
        res.send(`
            Welcome admin!, 
            You have full access.
        `);
        next();      
    } else {
        res.send(`Access Denied`);
    }
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});