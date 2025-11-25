const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

// Home route with a form
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            <label>Name:</label>
            <input type="text" name="username" required />
            <button type="submit">Submit</button>
        </form>
    `)
})

// app.all runs for ANY HTTP method
app.all('/submit', (req, res) => {
    res.send(`
        <h2>Method: ${req.method}</h2>
        <h3>Received Data:</h3>
        <pre>${JSON.stringify(req.body, null, 2)}</pre>
    `)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
