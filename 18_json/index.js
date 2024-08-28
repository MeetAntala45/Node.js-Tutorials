// JSON stands for javascript object notation
// JSON is lightweight
// format for storing and transporting data
// JSON is often used when data is sent from a server to a web page

const data = {
    name : "Meet",
    age : "19",
    hobby : "cricket"
};

const jsonData = JSON.stringify(data);          //Object to JSON
console.log(jsonData);

const objData = JSON.parse(jsonData);           //JSON to object
console.log(objData);  