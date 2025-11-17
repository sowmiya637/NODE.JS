const fs = require('fs');

fs.writeFile('greeting.txt', 'Hello Sowmiya! Welcome to Node.js ', (err) => {
  if (err) throw err;
  console.log(' File created and content written successfully!');
});
