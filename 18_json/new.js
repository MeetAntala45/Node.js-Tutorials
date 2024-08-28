const fs = require('fs');
const data = {
    name : "Meet",
    age : "19",
    hobby : "cricket"
};

const jsonData = JSON.stringify(data);          //Object to JSON

// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err,data)=>{
    console.log(data);
    const objData = JSON.parse(data);
    console.log(objData);
})