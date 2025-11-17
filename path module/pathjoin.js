const path = require('path');

const uploadFolder = 'uploads';
const userFolder = 'profile';
const fileName = 'photo.png';

const fullPath = path.join(uploadFolder, userFolder, fileName);
console.log(' Full Upload Path:', fullPath);
