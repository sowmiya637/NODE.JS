
# 📘 Node.js Basics — Console, Async Operations, and User Input

This project contains three beginner-friendly Node.js scripts demonstrating:

- Basic Node.js execution  
- Console logging  
- Using built-in modules  
- Asynchronous file operations  
- Taking user input using the `readline` module  

Great for learning the fundamentals of Node.js execution and event-driven behaviour.

---

## 📁 Files Included

### 1. **console-demo.js**  
Shows how to print messages, use variables, perform calculations, and use the `os` module.

### 2. **async-demo.js**  
Demonstrates asynchronous execution with `fs.readFile()`.

### 3. **input-demo.js**  
Takes user input using the `readline` module.

---

# 1️⃣ `console-demo.js`

```js
// Print a message
console.log(" Hello from Node.js script!");

// Declare variables
let name = "sowmiya";
let age = 20;

// Perform operations
console.log("Name:", name);
console.log("Age:", age);
console.log("In 5 years, you will be", age + 5, "years old.");

// Use a built-in Node module (OS)
const os = require("os");
console.log("Your operating system is:", os.platform());
````

### ✔ What this script demonstrates

* `console.log()` to print values
* Declaring and using variables
* Performing arithmetic
* Using Node's built-in `os` module
* Printing system platform

### ▶ Run the script

```
node console-demo.js
```

---

# 2️⃣ `async-demo.js`

```js
const fs = require('fs');

console.log("Start of script");

fs.readFile(__filename, 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.log("File read complete (Async operation)");
});

console.log("End of script (Executed before file read finishes)");
```

### ✔ Concepts Demonstrated

* **Asynchronous programming** in Node.js
* Event loop behaviour
* `fs.readFile` uses the **libuv thread pool**
* `console.log("End of script")` executes *before* file read finishes

### 📌 Why?

Because Node.js does not block execution. The file read runs in the background.

### ▶ Run the script

```
node async-demo.js
```

Sample output:

```
Start of script
End of script (Executed before file read finishes)
File read complete (Async operation)
```

---

# 3️⃣ `input-demo.js`

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js `);
  rl.close();
});
```

### ✔ What this script shows

* Taking user input from the terminal
* Using Node.js `readline` module
* Callback pattern
* Interactive console applications

### ▶ Run the script

```
node input-demo.js
```

Sample run:

```
What is your name? Sowmiya
Hello, Sowmiya! Welcome to Node.js
```

---

# 📝 Summary of What You Learned

| Concept                | Demo File       |
| ---------------------- | --------------- |
| Console Logging        | console-demo.js |
| Variables & Operations | console-demo.js |
| Using Built-in Modules | console-demo.js |
| Asynchronous Execution | async-demo.js   |
| File Reading           | async-demo.js   |
| User Input             | input-demo.js   |
| readline Module        | input-demo.js   |

