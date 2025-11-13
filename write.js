// import fs from 'fs'
const fs = require('fs');
const filepath = 'output.json'
const content = {
    name : 'nodejs',
    code : 'int222'
}
const content1 = JSON.stringify(content, null, 2)
fs.writeFile(filepath, content1, 'utf-8', (err) =>{
    if(err){
        console.error("Error is : ", err)
        return
    }
    console.log("data entered")
})