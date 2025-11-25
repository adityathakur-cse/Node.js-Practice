const fs = require('fs')
const file1 = "data.txt"
const file2 = "test.txt"
const outFile = "file.txt"

fs.readFile(file1, 'utf-8', (err, data1) => {
    if(err){
        console.log(err)
    }
    fs.readFile(file2, 'utf-8', (err, data2) => {
        if(err){
            console.log(err)
        }
        const combined = data1 + '/n' + data2
        fs.writeFile(outFile, combined, (err) => {
            if(err){
                console.log(err)
            }
            console.log("Text combined successfully")
        })
    })
})

//TASK
//create a new file which is combined of modified data of file1 and file2
//file1 should be using replace function
//file2 should be using appendFile function
