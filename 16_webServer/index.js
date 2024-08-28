const http = require('http');

const server = http.createServer((req,res) => { 
    res.end('Hello Meet');
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port 8000");
});

//type localhost:8000 to see output