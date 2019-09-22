const path=require('path');

//Base filename
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//Base filename's extension
console.log(path.extname(__filename));

//returns object regarding the current file
console.log(path.parse(__filename));

//concatenate files
console.log(path.join(__dirname,'test','index.html'));