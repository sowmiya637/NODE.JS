
# 📘 Node.js Modules Demo — ES Modules & CommonJS

This project demonstrates how **ES Modules (ESM)** and **CommonJS (CJS)** work in Node.js.

You will learn:

- How to export/import using **ES Module syntax**
- How to export/import using **CommonJS syntax**
- Difference between `.js`, `.mjs`, and `.cjs`
- How Node.js handles both module systems

---



## 📦 1. ES Module (math.js)

```js
// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;
````

### ✔ ES Module Features

* Uses `export`
* Modern JavaScript module system
* Requires `"type": "module"` in package.json (or use `.mjs` extension)

---

## ▶ 2. Importing ES Module (app.js)

```js
// app.js
import { add, multiply, PI } from './math.js';

console.log("Addition:", add(8, 12));
console.log("Multiplication:", multiply(5, 6));
console.log("Value of PI:", PI);
```

---

## 📦 3. CommonJS Module (math.cjs)

```js
// math.cjs
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

module.exports = { add, multiply };
```

### ✔ CommonJS Features

* Uses `module.exports`
* Loaded using `require()`
* Default module system in Node.js

---

## ▶ 4. Importing CommonJS (app.cjs)

```js
// app.cjs
const math = require('./math.cjs');

console.log("Addition:", math.add(5, 10));
console.log("Multiplication:", math.multiply(4, 3));
```

---

## 📘 ES Module vs CommonJS — Quick Comparison

| Feature         | ES Module (ESM)                         | CommonJS (CJS)   |
| --------------- | --------------------------------------- | ---------------- |
| File extension  | `.js` (with `"type": "module"`), `.mjs` | `.cjs`, `.js`    |
| Import syntax   | `import ... from ...`                   | `require()`      |
| Export syntax   | `export`                                | `module.exports` |
| Async support   | ✔ Supports top-level await              | ❌ No             |
| Modern standard | ✔ Yes                                   | ❌ Old            |

---

## ⚙ How to Run

### ▶ Run ES Module

```
node app.js
```

Ensure your **package.json** has:

```json
{
  "type": "module"
}
```



## 🎯 Purpose of This Demo

This example helps you understand:

* How Node.js supports **two module systems**
* When to use ES Modules (modern projects)
* When to use CommonJS (older projects, some npm packages)
* How to structure modules in real applications


