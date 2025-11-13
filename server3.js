const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.end('<h1> This is home page</h1>')
    }
    else if(req.url == '/about'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.end('<h1> This is about page</h1>')
    }
    else{
        res.writeHead(404, {'content-type' : 'text/html'})
        res.end('<h1> ERROR 404 - PAGE NOT FOUND</h1>')
    }
})

server.listen(3000, () => {
    console.log('server is running')
})