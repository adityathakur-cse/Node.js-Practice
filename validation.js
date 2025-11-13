const express = require('express');
const app = express(); //object of express module
const fs = require('fs');
const { body, validationResult } = require('express-validator'); // Import express-validator
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the form 
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <label>Name : </label>
            <input type="text" name="name" placeholder="Enter your name" required><br>
            <label>Email : </label>
            <input type="email" name="email" placeholder="Enter your email" required><br>
            <label>Age : </label>
            <input type="number" name="age" placeholder="Enter your age" required><br>
            <button type="submit">SUBMIT</button>
        </form>
    `);
});

// Handle form submission with validation
app.post(
    '/submit',
    [
        // Validation rules
        body('name')
            .trim()
            .notEmpty()
            .withMessage('Name is required')
            .isLength({ min: 3 })
            .withMessage('Name must be at least 3 characters long'),

        body('email')
            .trim()
            .isEmail()
            .withMessage('Please enter a valid email address'),

        body('age')
            .notEmpty()
            .withMessage('Age is required')
            .isInt({ min: 1, max: 120 })
            .withMessage('Age must be a valid number between 1 and 120'),
    ],
    (req, res) => {
        const errors = validationResult(req);

        // If validation fails
        if (!errors.isEmpty()) {
            // return res.status(400).send(`
            //     <h3 style="color:red;">Validation Errors:</h3>
            //     <ul>${errors.array().map(err => `<li>${err.msg}</li>`).join('')}</ul>
            //     <a href="/">Go back</a>
            // `);
            res.json(errors)
        }
        else{
            res.send(`form validation successful`)
        }

        // // If validation passes
        // const { name, email, age } = req.body;
        // const data = `Name: ${name}, Email: ${email}, Age: ${age}\n`;

        // // Append to file
        // fs.appendFile('file.txt', data, (err) => {
        //     if (err) {
        //         return res.status(500).send("<h3 style='color:red;'>Error saving data!</h3>");
        //     }
        //     res.send(`
        //         <h2 style='color:green;'>Data saved successfully!</h2>
        //         <p><b>${data}</b></p>
        //         <a href="/">Go back</a>
        //     `);
        // });
    }
);

// Start server
app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
