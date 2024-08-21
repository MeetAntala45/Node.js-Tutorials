const fs = require("fs");

// in Asynchronous there must be callback function(after creating file callback will be called)
fs.writeFile('read.txt',"Hi Meet", (err)=>{
    console.log("file is created");
    console.log(err);
});

fs.appendFile('read.txt'," Hello Meet", (err)=>{
    console.log("Data added");
    console.log(err);
});

fs.readFile('read.txt', "utf8", (err,data)=>{
    console.log(data);
})