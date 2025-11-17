
#  URL Module in Node.js — Complete Examples

This project demonstrates all major features of the **Node.js URL module**, including:

- `url.format()`  
- `new URL()`  
- Working with query parameters  
- Hash fragments  
- File URL conversions  
- Resolving relative URLs  

Node.js provides powerful utilities to parse, format, modify, and resolve URLs easily.

---

## 📁 Code Used

```js
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

console.log("\n6. File URL:");
const fileURL = pathToFileURL("C:/data/info.txt");
console.log(fileURL.href);

console.log("\n7. File Path from URL:");
console.log(fileURLToPath(fileURL));

const finalURL = url.resolve('https://example.com/', 'about');
console.log(finalURL);
````

---

# 📘 1. `url.format()`

Converts an object into a valid URL string.

### ▶ Example Output

```
https://example.com/api/user?id=10&name=Sowmiya
```

### ✔ Real Use Case

Useful when **building dynamic URLs**, such as API endpoints.

---

# 📘 2. `new URL()`

Creates a full URL object that allows easy access to:

* Host
* Path
* Query parameters
* Hash

### ▶ Example

```
Host: site.com
Pathname: /products
ID: 5
```

---

# 📘 3. Work With Query Parameters

`URLSearchParams` lets you modify queries.

### ➕ Append

```js
myURL.searchParams.append("sort", "price");
```

Result:

```
...?id=5&cat=toys&sort=price#reviews
```

### ❌ Delete

```js
myURL.searchParams.delete("cat");
```

Result:

```
...?id=5&sort=price#reviews
```

---

# 📘 4. Hash (`#reviews`)

A **fragment identifier** used in webpages.

### Output

```
#reviews
```

---

# 📘 5. File URL Conversion

Converts Windows path → File URL.

### Example:

```js
pathToFileURL("C:/data/info.txt");
```

Becomes:

```
file:///C:/data/info.txt
```

---

# 📘 6. Convert File URL → Local Path

```js
fileURLToPath(fileURL)
```

Output:

```
C:\data\info.txt
```

Useful in:

* File upload systems
* Reading system files
* Converting browser-style URLs to OS paths

---

# 📘 7. `url.resolve()`

Resolves a base URL with a relative path.

### Example:

```js
url.resolve('https://example.com/', 'about');
```

Result:

```
https://example.com/about
```

---

# 🧠 Summary Table

| Feature           | Explanation                   |
| ----------------- | ----------------------------- |
| `url.format()`    | Build URLs from objects       |
| `new URL()`       | Parse URLs into components    |
| `searchParams`    | Add/remove query strings      |
| `hash`            | Fragment identifiers          |
| `pathToFileURL()` | Convert file path → URL       |
| `fileURLToPath()` | Convert file URL → local path |
| `url.resolve()`   | Merge base + relative URLs    |


