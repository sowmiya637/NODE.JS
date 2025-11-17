const path = require('path');

console.log(' Current Folder:', __dirname);
console.log(' Current File Path:', __filename);

const htmlPath = path.join(__dirname, 'index.html');
console.log(' Serve this HTML:', htmlPath);
