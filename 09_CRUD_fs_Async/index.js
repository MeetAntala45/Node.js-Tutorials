const fs = require('fs');

fs.mkdir("Meet",(err)=>{
    console.log("Folder Created");
});

fs.writeFile("Meet/meet.txt","Hi Meet",(err)=>{
    console.log("File Created");
});

fs.appendFile("Meet/meet.txt"," Hello Meet",(err)=>{
    console.log("File Updated");
});

fs.readFile("Meet/meet.txt","utf-8",(err,data)=>{
    console.log(data);
})

fs.rename("Meet/meet.txt","Meet/rohit.txt",(err)=>{
    console.log("file renamed");
})

fs.unlink("Meet/rohit.txt",(err)=>{
    console.log("File Deleted");
})

fs.rmdir("Meet",(err)=>{
    console.log("Folder Removed");
})