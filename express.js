const express = require('express'); 
const app = express(); 
const port = 3000; 

// Route 1: Addition form
app.get('/', (req, res) => {
    res.send(`
        <h1>Arithematic Operation</h1>
        <form action="/add" method="get">
            <input type="number" name="num1" placeholder="First Number" required>
            <input type="number" name="num2" placeholder="Second Number" required>
            <button type="submit">SUBMIT</button>
        </form>
        <br>
        <a href="/admission">Go to Admission Form</a>
    `);
});

// Handle addition
app.get('/add', (req, res) => {
    const n1 = Number(req.query.num1);
    const n2 = Number(req.query.num2);
    const sum = n1 + n2;
    const sub = n1 - n2;
    const mul = n1 * n2;
    const div = n1 / n2;
    res.send(`
        <h2>Sum: ${n1} + ${n2} = ${sum}</h2>
        <h2>Difference: ${n1} - ${n2} = ${sub}</h2>
        <h2>Product: ${n1} * ${n2} = ${mul}</h2>
        <h2>Division: ${n1} / ${n2} = ${div}</h2>
        <a href="/">Back to Home</a>
    `);
});

//Admission form
app.get('/admission', (req, res) => {
    res.send(`
        <h1>Admission Form - Calculate Percentage</h1>
        <form action="/percentage" method="get">
            <input type="number" name="marksObtained" placeholder="Marks Obtained" required>
            <input type="number" name="totalMarks" placeholder="Total Marks" required>
            <button type="submit">Calculate Percentage</button>
        </form>
        <br>
        <a href="/">Back to Home</a>
    `);
});

// Handle percentage calculation
app.get('/percentage', (req, res) => {
    const obtained = Number(req.query.marksObtained);
    const total = Number(req.query.totalMarks);

    if (total === 0) {
        res.send(`<h3>Total marks cannot be zero!</h3><a href="/admission">Try again</a>`);
        return;
    }

    const percent = (obtained / total) * 100;
    res.send(`
        <h2>Percentage: ${percent.toFixed(2)}%</h2>
        <a href="/admission">Back</a>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})


//1. arithematic operation
//2. Admission form
// calculate percentage where total marks, marks obtainded needed to be entered   
