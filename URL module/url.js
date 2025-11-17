const url = require('url');
const { URL, pathToFileURL, fileURLToPath } = require('url');

console.log("1. url.format():");
console.log(url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/api/user',
  query: { id: 10, name: 'Sowmiya' }
}));

console.log("\n2. new URL():");
const myURL = new URL("https://site.com/products?id=5&cat=toys#reviews");
console.log("Host:", myURL.host);
console.log("Pathname:", myURL.pathname);
console.log("ID:", myURL.searchParams.get("id"));

console.log("\n3. Append query:");
myURL.searchParams.append("sort", "price");
console.log(myURL.href);

console.log("\n4. Remove cat:");
myURL.searchParams.delete("cat");
console.log(myURL.href);

console.log("\n5. Hash:", myURL.hash);

console.log("\n6. File URL:");  //file:// → protocol, /C:/data/info.txt → actual file location
const fileURL = pathToFileURL("C:/data/info.txt");
console.log(fileURL.href);

console.log("\n7. File Path from URL:");
console.log(fileURLToPath(fileURL));

const finalURL = url.resolve('https://example.com/', 'about');
console.log( finalURL);
