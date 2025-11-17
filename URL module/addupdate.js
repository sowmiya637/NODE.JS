const { URL } = require('url');

const myURL = new URL('https://www.flipkart.com/search?item=mobile');
myURL.searchParams.append('price', '20000');
myURL.searchParams.set('item', 'laptop');//add
console.log(myURL.toString());


