
# 🌀 Node.js Event Loop — nextTick, Microtasks, Timers & I/O (Full Demo)

This project contains **multiple examples** explaining how the  
Node.js **Event Loop**, **Microtasks**, **process.nextTick**, **Timers**,  
and **setImmediate** work internally.

You will clearly see **execution order**, **phases**, and **priorities**.

---

## 📂 Files / Code Examples Included

All sample codes are inside a single file (or multiple blocks):

1. **Example A — nextTick, Promises, setTimeout, setImmediate**
2. **Example B — nextTick vs Promise priority**
3. **Example C — I/O callbacks + setTimeout vs setImmediate**
4. **Example D — Microtasks vs Macrotasks**

---

# 🧠 Event Loop Concepts (Short Explanation)

Before running the examples, understand key concepts:

### ✅ **Synchronous Code**
Runs immediately in the main thread.

### ✅ **process.nextTick()**
Highest priority.  
Executes **before Promises** and before the Event Loop continues.

### ✅ **Microtask Queue**
Includes:
- `Promise.then()`
- `queueMicrotask()`

Runs **after nextTick** but **before timers or I/O**.

### ✅ **Timers Phase**
Runs callbacks from:
- `setTimeout`
- `setInterval`

### ✅ **Poll Phase**
Handles:
- I/O callbacks (e.g., `fs.readFile`)

### ✅ **Check Phase**
Contains:
- `setImmediate`

### ⭐ Priority Order (Most important)
```

Synchronous → nextTick → Microtasks → Timers → I/O callbacks → Check (setImmediate)

````

---

# ▶ Example A — nextTick, Promise, setTimeout, setImmediate

```js
console.log('start (sync)');

process.nextTick(() => console.log('process.nextTick'));

Promise.resolve().then(() => console.log('promise.then (microtask)'));

setTimeout(() => console.log('setTimeout (timers phase)'), 0);

setImmediate(() => console.log('setImmediate (check phase)'));

console.log('end (sync)');
````

### 📌 Expected Order

```
start (sync)
end (sync)
process.nextTick
promise.then (microtask)
setTimeout (timers phase)
setImmediate (check phase)
```

---

# ▶ Example B — nextTick runs before Promises

```js
console.log('start');

Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));

console.log('end');
```

### 📌 Output Order

```
start
end
nextTick
promise
```

✔ nextTick always wins over Promises.

---

# ▶ Example C — I/O + setImmediate vs setTimeout

```js
const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('file read callback (poll phase)');

  setTimeout(() => console.log('setTimeout inside I/O callback'), 0);
  setImmediate(() => console.log('setImmediate inside I/O callback'));
});

setTimeout(() => console.log('setTimeout (timers)'), 0);
setImmediate(() => console.log('setImmediate (check)'));
```

### 📌 Output Pattern (common)

```
setTimeout (timers)
setImmediate (check)
file read callback (poll phase)
setImmediate inside I/O callback
setTimeout inside I/O callback
```

### 💡 Why?

Inside **I/O callback**,
`setImmediate()` usually runs **before** `setTimeout(0)`
because I/O ends in the Poll Phase and the next phase is **Check**.

---

# ▶ Example D — Microtasks vs Macrotasks

```js
console.log('script start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve()
  .then(() => console.log('promise1'))
  .then(() => console.log('promise2'));

console.log('script end');
```

### 📌 Output Order

```
script start
script end
promise1
promise2
timeout
```

✔ Promises (microtasks) run before timers.

---

# ⭐ Summary Table — Execution Priority

| Order | Task Type                             |
| ----- | ------------------------------------- |
| 1️⃣   | Synchronous Code                      |
| 2️⃣   | **process.nextTick()**                |
| 3️⃣   | **Promises / Microtasks**             |
| 4️⃣   | **Timers (setTimeout / setInterval)** |
| 5️⃣   | **I/O Callbacks (fs, net, etc.)**     |
| 6️⃣   | **setImmediate()**                    |
| 7️⃣   | Close callbacks (streams cleanup)     |

---
