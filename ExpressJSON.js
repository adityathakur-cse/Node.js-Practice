const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => {
    const user = {
        name1 : "Ranbir",
        course : "MBA",
        age : 23
    }
    res.json(user)
})
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})