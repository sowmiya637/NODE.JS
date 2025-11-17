
# 📘 Node.js Architecture Demo

This project demonstrates how Node.js internally handles **synchronous** and **asynchronous** operations using:

- Event Loop  
- Microtask Queue  
- Callback Queue  
- libuv Thread Pool  

The goal is to understand **execution order** inside Node.js.

---

## 📂 File: `architecture-demo.js`

```js
const fs = require("fs");

console.log("Start of script (Synchronous)");

// Asynchronous File Read (handled by libuv thread pool)
fs.readFile(__filename, () => {
  console.log("File read complete (Async - libuv thread pool)");
});

// Timer callback (executed in Event Loop: Timers Phase) 
setTimeout(() => {
  console.log("setTimeout callback (Event Loop - Timers Phase)");
}, 0);

// setImmediate callback (run in Check Phase)
setImmediate(() => {
  console.log("setImmediate callback (Event Loop - Check Phase)");
});

// Promise Microtask (runs before timers)
Promise.resolve().then(() => {
  console.log("Promise resolved (Microtask Queue)");
});

console.log("End of script (Main Thread still running other tasks)");
````

---

# 🧠 Concept Explanation

This file shows how Node.js executes different operations in specific phases of the **Event Loop**.

---

## 🔥 1. Synchronous Code (Main Thread)

Runs immediately, before any async tasks.

```js
console.log("Start of script");
console.log("End of script");
```

Node completes all synchronous code first.

---

## 🔧 2. libuv Thread Pool — `fs.readFile`

```js
fs.readFile(__filename, () => {
  console.log("File read complete (Async - libuv thread pool)");
});
```

* File reading is handled by **libuv's thread pool**, not the event loop.
* After completion, the callback goes to the **Poll Phase**.

---

## ⏳ 3. Timers Phase — `setTimeout`

```js
setTimeout(() => {
  console.log("setTimeout callback (Event Loop - Timers Phase)");
}, 0);
```

Even with `0 ms`, it only runs **after**:

* Synchronous code
* Microtasks
* Some Poll events

---

## ⚡ 4. Check Phase — `setImmediate`

```js
setImmediate(() => {
  console.log("setImmediate callback (Event Loop - Check Phase)");
});
```

Runs in the **Check Phase**, which always happens after the Poll Phase.

---

## 🔁 5. Microtasks — `Promise.then`

```js
Promise.resolve().then(() => {
  console.log("Promise resolved (Microtask Queue)");
});
```

Microtasks run:

* After synchronous code
* **Before** timers and setImmediate
* With the highest priority among async tasks

---

# 📜 Expected Execution Order

The output usually appears like this:

1. **Start of script (Synchronous)**
2. **End of script (Synchronous)**
3. **Promise resolved (Microtask Queue)**
4. **setTimeout callback (Timers Phase)**
5. **File read complete (Async - libuv thread pool)** *(sometimes before/after timeout)*
6. **setImmediate callback (Check Phase)**

---

# 🎯 What This Demo Teaches

✔ Node.js runs synchronous tasks first
✔ Microtasks (Promises) run before any other async callback
✔ Timers run in the Timers Phase
✔ `setImmediate` runs in the Check Phase
✔ `fs.readFile` uses the libuv thread pool
✔ The Event Loop controls everything



