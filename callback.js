function greet(name, callback){
    console.log( "hello " + name )
    callback()
}
// function sayBye(){
//     console.log("goodbye")
// }
// greet("John", sayBye)

greet("John", () => {
    console.log("Good Bye")
})