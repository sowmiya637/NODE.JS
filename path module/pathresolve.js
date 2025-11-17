//Converts a relative path into an absolute path.

const path = require('path');

const absPath = path.resolve('config', 'settings.json');
console.log(' Absolute Path:', absPath);
