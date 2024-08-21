const fs = require("fs");

// in synchronous data will be fetched first not other thing
const data = fs.readFileSync("read.txt","utf-8");
console.log(data);
console.log("after the data");

// first after the data will be shown next line will not wait for complete previous
fs.readFile('read.txt', "utf8", (err,data)=>{
    console.log(data);
});
console.log("after the data");
