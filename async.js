// const getData = new Promise((resolve, reject)=>  {     
//     setTimeout(()=> resolve("Data received"), 5000) 
// }) 
// getData.then(msg => console.log(msg));


// function getData(){
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Data received"), 2000)
//     })
// }
// async function fetchData() {
//     console.log("Fetching...")
//     const result = await getData()
//     console.log(result)
//     console.log("Done")
// }
// fetchData()


function fetchData(){
    return new Promise ((resolve, reject) => {
        let success = true
        setTimeout(() => {
            if(success) resolve("data received")
                else reject("Error in fetching data!")
        },2000)
    })
}
async function getData() {
    try{
        const data = await fetchData()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}
getData()

//read and write a file with both sync and async ways using fs