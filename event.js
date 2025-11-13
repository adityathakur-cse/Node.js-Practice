const EventEmitter = require('events')
const obj = new EventEmitter()
// obj.addListener('marketOpen', (msg) => {
//     console.log(msg)
// })
// obj.emit('marketOpen', 'The market is open')


// obj.on('Weather', (msg) => {
//     console.log(msg)
// })
// obj.emit('Weather', 'Weather is fantastic af')


// obj.once('Circus', (msg) => {
//     console.log(msg)
// })
// obj.emit('Circus', 'Circus opened')
// obj.emit('Circus', 'Circus opened again') //first statement will only be printed


// console.log(obj.getMaxListeners())
// for(let i=0;i<9;i++){
//     obj.addListener('Weather', (msg) => {
//         console.log(msg)
//     })
// }
// obj.emit('Weather', 'max listener are 10')


//function
var func1 = () => {
    console.log("today is good day")
}
var func2 = () => {
    console.log("Just another good day")
}
obj.addListener('marketOpen', func1)
obj.addListener('marketOpen', func2)
obj.emit('marketOpen')

obj.removeListener('marketOpen', func2)
obj.emit('marketOpen')

obj.removeAllListeners('marketOpen')
obj.emit('marketOpen')
