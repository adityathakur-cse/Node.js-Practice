const fs = require('fs');
// import fs from 'fs'  (error)
const filepath = "test.json";
fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error in reading file:", err);
        return
    }
    const data1  = JSON.parse(data)
    console.log('File content is:', data1);
});
