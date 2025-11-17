const fs = require('fs');

fs.readFile('greeting.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(' File content:', data);
});
