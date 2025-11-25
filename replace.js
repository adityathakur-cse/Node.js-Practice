const fs = require('fs');
const filePath = "test.txt";
const searchText = "javascript";
const replaceText = "node";
// Read data from file
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.log("Error while reading:", err);
        return;
    }
    // Replace the data
    const updated = data.replace(searchText, replaceText);

    fs.writeFile(filePath, updated, (err) => {
        if (err) {
            console.log("Error while writing:", err);
            return;
        }
        console.log("The replacement is done.");
    });
});
