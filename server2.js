//reading the content and display it on the server
const fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if(err){
            res.end('error identified')
        }else{
            res.end(data)
        }
    })
})
