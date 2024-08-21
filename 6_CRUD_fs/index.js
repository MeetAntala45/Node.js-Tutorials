const fs = require('fs');

// Create a folder
fs.mkdirSync('Meet');

// new file with data
fs.writeFileSync('Meet/meet.txt',"Hi meet");

//append data
fs.appendFileSync('Meet/meet.txt', " Hello Meet");

//read data without buffer data
const data = fs.readFileSync("Meet/meet.txt","utf8");
console.log(data);

//rename the file
fs.renameSync("Meet/meet.txt","Meet/rohit.txt");

//delete everything
fs.unlinkSync("Meet/rohit.txt");
fs.rmdirSync("Meet");