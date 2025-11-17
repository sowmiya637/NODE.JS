const os = require('os');

console.log(' System Information:');
console.log('----------------------');
console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('User:', os.userInfo().username);
console.log('Home Dir:', os.homedir());
console.log('Total Memory:', Math.round(os.totalmem() / (1024 * 1024)) + ' MB');//This converts bytes → megabytes (MB),(Because 1 MB = 1024 × 1024 bytes)
console.log('Free Memory:', Math.round(os.freemem() / (1024 * 1024)) + ' MB');
console.log('System Uptime:', Math.round(os.uptime() / 3600), 'hours');//Converts seconds → hours (1 hour = 3600 seconds)
console.log('CPU Info:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
