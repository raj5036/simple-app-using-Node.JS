const fs=require('fs');
const path=require('path');

fs.mkdir(path.join(__dirname,'/test'),{},err=>{
    if(err) throw err;
    console.log("Folder created....");
});

fs.writeFile(path.join(__dirname,'/test','test.html'),'<h1>Hello world!!</h1>',err=>{
    if(err) throw err;
    console.log("File written to....");
});