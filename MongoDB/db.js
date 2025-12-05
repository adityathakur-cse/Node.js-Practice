import express from 'express';
const app = express()
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    name : String,
    price : Number
})
const Product = mongoose.model("products", productSchema)
mongoose.connect("mongodb://localhost:27017/")
app.use(express.urlencoded({extended : true}))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "db.html"))
})
// CREATE
app.post("/add", async(req, res) => {
    let data = new Product(req.body)
    let result = await data.save()
    res.send(`
        <h2>Product Added Successfully!</h2>
        <p><b>Name : </b>${result.name}</p>
        <p><b>Price : </b>${result.price}</p>
        <br><a href='/'>GO Back</a>
        `)
})
// READ
app.post("/read", async(req, res) => {
    let data = await Product.find()
    let table = `
        <h2>All Products</h2>
        <table border="1" cellpadding="10">
        <tr><th>Name</th><th>Price</th><th>ID</th></tr>
        `
    data.forEach(item => {
        table += `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item._id}</td>
        </tr>
        `
    })
    table += `</table><br><a href='/'>GO Back</a>`
    res.send(table)
})

app.listen(3000, () => {
    console.log(`server is running http://localhost:3000`)
})