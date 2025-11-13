const express = require('express');
const app = express(); //object of express module
const port = 3000;
//custom middleware
app.use((req, res, next) => {
    console.log(`Request Method : ${req.method}, URL : ${req.url}`)
    next()
})
//routing
app.get('/', (req, res) => {
    res.send("This is middleware")
})
//start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//To show how middleware can be used for tasks like:
// Logging requests
// Authentication
// Error handling
// Modifying requests/responses before they reach routes