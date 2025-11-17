const fs = require('fs');

fs.unlink('greeting.txt', (err) => {
  if (err) throw err;
  console.log(' File deleted successfully!');
});
