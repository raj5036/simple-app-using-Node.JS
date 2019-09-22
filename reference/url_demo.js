const url = require('url');

const myUrl = new URL('https://mywebsite.io:3000/index.html?id=001&&status=active ');

//serialized URL printing in the console
console.log(myUrl.href);
console.log(myUrl.toJSON());

//host
console.log(myUrl.host);

//hostname(Does not return the port no.)
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append('logger',1335);
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value,name)=>{console.log(`${name}:${value}`)});