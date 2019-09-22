//testing

/*console.log("Raj");
const person=require('./person');
const person1=new person("Raj",22);
person1.greeting();*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url);  //to print the requested page on the console

    
    if(req.url=='/'){
        fs.readFile(path.join(__dirname,'public','home.html'),(err,content)=>{ 
              if(err) throw err;
              // res.end("<h1>HomePage</h1>");
              res.writeHead(200,{'content-type':'text/html'});
              res.end(content);
    });
        
    }
    if(req.url=='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{ 
              if(err) throw err;
              // res.end("<h1>HomePage</h1>");
              res.writeHead(200,{'content-type':'text/html'});
              res.end(content);
    });
        
    }
    if(req.url=='/api/users'){
        const users=[
            {name:"John Doe",age:20},
            {name:"Bob Smith",age:45}
        ];
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(users));
    }
    // res.write();
    });

   

const PORT = process.env.PORT || 3000;
server.listen(3000,()=>{console.log(`Server started on Port ${PORT}`)});