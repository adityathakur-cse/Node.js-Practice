const express = require('express');
const app = express(); //object of express module
const port = 3000;
//middleware
const log = (req, res, next) => {
    console.log(`First middleware running`)
    next()
}
app.use(log)
//another middleware - custom middleware chain
app.use((req, res, next) => {
    console.log(`Second middleware running`)
    next()
})
app.get('/',(req, res) => {
    res.send(`Middleware is working`)
})
//start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});