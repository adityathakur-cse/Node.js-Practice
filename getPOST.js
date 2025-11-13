const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
//create a form take user inputs and details submitted should be display and saved in a text file or json.

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Serve the form
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <input type="text" name="name" placeholder="Enter your name"><br>
            <input type="text" name="email" placeholder="Enter your email"><br>
            <button type="submit">SUBMIT</button>
        </form>
    `);
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    //Prepare data to save
    const data = `Name: ${name}, Email: ${email}\n`;
    //Append data to file
    fs.appendFile('file.txt', data, (err) => {
        if (err) {
            res.send("Error saving data!");
        } else {
            res.send(`<h2>Data saved successfully</h2><h2>${data}</h2>`);
        }
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



// app.use(express.urlencoded({extended:true}))
// app.get('/', (req, res) => {
//     res.send(`
//         <h1>STUDENT REGISTRATION FORM</h1><br>
//         <form action = "/submit" method="post">
//         <input type="text" name="name" placeholder="Enter your name"><br>
//         <input type="text" name="roll" placeholder="Enter your roll no"><br>
//         <input type="text" name="department" placeholder="Enter your department"><br>
//         <input type="text" name="sec" placeholder="Enter your section"><br>
//         <input type="text" name="subject" placeholder="Enter your subject"><br>
//         <input type="text" name="address" placeholder="Enter your address"><br>
//         <button type="submit">SUBMIT</button>
//         </form>
//     `)
//     })
//     //handle form submission
//     app.post('/submit', (req,res) => {
//         const name = req.body.name
//         const roll = req.body.roll
//         const department = req.body.department
//         const sec = req.body.sec
//         const subject = req.body.subject
//         const address = req.body.address
//         res.send(`NAME :${name} <br> 
//             ROLL NO : ${roll} <br>
//             DEPARTMENT :  ${department} <br>
//             SECTION : ${sec} <br>
//             SUBJECT : ${subject} <br>
//             ADDRESS : ${address} <br>
//         `)
//     })
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
