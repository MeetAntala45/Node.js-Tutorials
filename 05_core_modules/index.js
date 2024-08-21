// this modules are same as javascript libraries and we can use it without installation

// this is core module fs now we can use functionalities of fs
const fs = require("fs");       

// this will create read.txt if not exist , if exist then overwrite it.
fs.writeFileSync('read.txt', "Welcome ");

// append new data to pre existing file
fs.appendFileSync('read.txt', "Meet");

//node.js includes an additional data type called buffer
// buffer is used to store binary data while reading from a file of receiving packets from network
const buf = fs.readFileSync('read.txt');
console.log(buf);
data = buf.toString();
console.log(data);

//rename the file
fs.renameSync('read.txt','readwrite.txt');