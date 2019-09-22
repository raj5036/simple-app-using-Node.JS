const http = require('http');

http.createServer((req,res)=>{
    res.write("I love you 3000 :)");
    res.end();
}).listen(3000,()=>{console.log("Server running......")});