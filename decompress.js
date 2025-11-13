const fs = require('fs')
const zlib = require('zlib')
//read the compressed file
const readstream = fs.createReadStream('test.txt.gz')
// create a write stream
const writestream = fs.createWriteStream('test_decompress.txt') //rename FILE to see changes
//create a gunzip transformation
const gunzip = zlib.createGunzip()
//pipe : read > decompress > write 
readstream.pipe(gunzip).pipe(writestream)
console.log("File is decompressed")