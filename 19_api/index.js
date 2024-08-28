// application programming interface
// through api we can req data
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url =="/")
    {
        res.write("Hello From Home");
        res.end();    // response will not generated till res.end() executes
    }
    else if(req.url == "/userapi")
    {
        res.writeHead(200, {"content-type":"application/json"})
        fs.readFile("userapi.json","utf-8",(err,data)=>{
            const objData = JSON.parse(data);
            res.end(objData[0].name);
        })
    }
    else if(req.url == "/about")
    {
        res.end("Hello Form /about");
    }
    else if(req.url == "/contact")
    {
        res.end("Hello Form /contact");
    }
    else
    {
        res.writeHead(404, {"Content-type": "text/html"});    //this will set error type because 404 is used for that
        res.end("<h1> 404 Page does't exist </h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port 8000.");
});

