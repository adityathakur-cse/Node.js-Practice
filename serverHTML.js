const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/home'){
        fs.readFile('index.html', (err, data) => {
            if(err){
                res.writeHead(500)
                res.end('Error in loading the file')
            }
            else{         
                res.writeHead(200, {'content-type' : 'text/html'})
                res.end(data)
            }
        })
    }
    else if(req.url === '/about'){
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'content-type' : 'text/html'})
            res.end(data)
        })
    }
})

server.listen(3000, () => {
    console.log('server is running')
})