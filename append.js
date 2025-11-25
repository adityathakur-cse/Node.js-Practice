const fs = require('fs')
const filePath = "data.txt"
const newData = "Subject code is INT 222."

//append data in the file
fs.appendFile(filePath, newData, (err) => {
    if(err){
        console.log("error in appending file", err)
    }
    console.log("data append")
})