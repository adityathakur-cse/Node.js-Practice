//reading the content and display it on the server
const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if(err){
            res.end('error identified')
        }else{
            res.end(data)
        }
    })
})
server.listen(3000, () => {
    console.log("server is running");
})