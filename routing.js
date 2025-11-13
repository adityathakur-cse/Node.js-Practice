const express = require('express'); 
const app = express(); 
const port = 3000; 
//home route
app.get('/', (req, res) =>{
    res.send(`<h1><a href="/contact">Contact</a>
        <a href="/service">Service</a><br>
        This is home page.</h1>
    `)
})
//contact route
app.get('/contact', (req, res) =>{
    res.send(`<h1><a href="/">Back</a><br>
        This is contact page.</h1>
    `)
})
//service route
app.get('/service', (req, res) =>{
    res.send(`<h1><a href="/">Back</a><br>
        This is services page.</h1>
    `)
})
//start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});