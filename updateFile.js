const fs = require('fs')
const filePath = "test.txt"

//  new content
const newContent = "This is a file content"
//  rewrite the file
fs.writeFile(filePath, newContent, (err) => {
    if(err){
        console.log("error updating file", err)
    }
    console.log("File updated successfully!")
})
