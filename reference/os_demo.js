const os = require('os');

//Os information
console.log("Platform: " + os.platform());
//OS architechture
console.log("Architecture: " + os.arch());
//CPU core info
console.log(os.cpus());
//free memory
console.log(os.freemem());
//total memory
console.log(os.totalmem());

console.log("Your system is running for " + os.uptime()+" Seconds");
