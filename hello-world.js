console.log("HELLO WORLD")
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.writeHead(400, {"content-type": "text/html"});
        res.end(data);
    });
});

fs.writeFileSync("welcome.txt", "Hello node");
fs.readFile("welcome.txt", (err, data) =>{
    console.log(data.toString())
});


server.listen(3000);