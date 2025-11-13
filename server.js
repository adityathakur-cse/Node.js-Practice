const http = require('http') //import the module

// //creation of server
// http.createServer((request, respond) => {
    //     respond.end("Hello Node JS")
    // }).listen(3000, () => {     //starting the server
    //     console.log("server is running")
    // })
    
    

//creation of server
// const server = http.createServer((req, res) => {
//     res.write("This is an example")
//     res.end()
// })
// server.listen(3000, () => {
//     console.log("server is running at http://localhost:3000")
// })


//creation of server
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type' : 'text/plain'})
//     res.end("hello this is node")
// })
// //start the server
// server.listen(3000, () => {
//     console.log("Server is running")
// })


//creation of server
// const server = http.createServer((req, res) => {
//     function add(a,b){
//         return a+b;
//     }
//     res.end(`The sum is ${add(4,5)}`)
// }).listen(3000, () => {
//     console.log("Server is running")
// })


// function showPage(res){
//     res.write('<h1>Welcome to node js</h1>')
// }
// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type' : 'text/html'})
//     showPage(res)
//     res.end()
// }).listen(3000, () => {
//     console.log('server is running')
// })


// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type' : 'application/json'})
//     const data = {
//         name : "ISH",
//         course : "CSE"
//     }
//     res.end(JSON.stringify(data))
// })
// server.listen(3000, () => {
//     console.log('server is running on http://localhost:3000')
// })

//use fs, http, zlib in one program. 
//read the text file, then display on server, lastly compress file
// const fs = require('fs');
// const http = require('http');
// const zlib = require('zlib');

// const inputFile = 'test.txt';
// const compressedFile = 'test.txt.gz';
// const server = http.createServer((req, res) => {
//   fs.readFile(inputFile, 'utf8', (err, data) => {
//     if (err) {
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Error reading file.');
//       return;
//     }

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(`File Content:\n\n${data}`);

//     const gzip = zlib.createGzip();
//     const readStream = fs.createReadStream(inputFile);
//     const writeStream = fs.createWriteStream(compressedFile);

//     readStream.pipe(gzip).pipe(writeStream);

//     writeStream.on('finish', () => {
//       console.log('File compressed successfully:', compressedFile);
//     });
//   });
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });


