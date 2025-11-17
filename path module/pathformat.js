//Builds a full path from an object.

const path = require("path");
const formatted = path.format({
  dir: 'C:/project/app',
  name: 'server',
  ext: '.js'
});
console.log(' Formatted Path:', formatted);
