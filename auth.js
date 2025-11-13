const express = require('express');
const app = express(); //object of express module
const port = 3000;
//custom middleware
function checkUser(req, res, next){
    if(req.query.user === 'admin'){
        console.log('Access Granted')
        next() // go to next route
    }else{
        console.log('Access Denied')
        res.status(403).send('Access Denied')
    }
}

//apply middleware for a specific route
app.get('/dashboard', checkUser, (req, res) => {
    res.send("Welcome to the dashboard")
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/dashboard?user=admin`);
});

//H.W.
//create a middleware for authentication, in which after successful login 
// deatils of the login form should be saved in a txt file