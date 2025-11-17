const path = require('path');

const fileName = 'profile.jpeg';
const fileExt = path.extname(fileName);

if (fileExt === '.png' || fileExt === '.jpg' || fileExt === '.jpeg') {
  console.log(' Image file accepted.');
} else {
  console.log(' Invalid file type.');
}
