const fs = require('fs');

fs.appendFile('greeting.txt', '\nHave a great day! ', (err) => {
  if (err) throw err;
  console.log(' Hello sowmiya ravichandran!');
});
