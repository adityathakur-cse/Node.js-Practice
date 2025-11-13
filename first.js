// REPL(READ, EVAL, PRINT, LOOP)


// console.log("Hello LPU")
// let a = Number(prompt("Enter first number :"));
// let b = Number(prompt("Enter second number :"));
// let o = prompt("Enter operator :");

// function cal(a, b, o){
//     if(o == '+'){
//         console.log(a + b);
//     }
//     if(o == '-'){
//         console.log(a - b);
//     }
//     if(o == '/'){
//         console.log(a / b);
//     }
//     if(o == '*'){
//         console.log(a * b);
//     }
// }

// cal(a, b, o);


function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function greet(){
    return "Welcome message";
}
module.exports = {add, sub, greet}



// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });