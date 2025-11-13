const url = require('url');
const myUrl = new URL('https://chatgpt.com/')

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.hash);
console.log(myUrl.port);