const fs = require('fs')
const write = fs.createWriteStream("test.txt", "utf-8")
write.write("This is file system")
write.end()
