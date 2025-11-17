
# 🖥️ Node.js OS Module — System Information Script

This project demonstrates how to use Node.js **`os` module** to retrieve important system-level information such as CPU details, memory usage, user info, OS type, uptime, network interfaces, and more.

The `os` module is a built-in Node.js module that provides **operating system–related utility functions**.  
It helps backend systems collect environment info, logs, monitoring data, or diagnostics.

---

# 📌 Features of This Script

This script prints:

- OS Type  
- Platform  
- Architecture  
- Hostname  
- Logged-in user  
- Home directory  
- Total memory  
- Free memory  
- System uptime  
- CPU information  
- Network interface details  

---

# 📄 Full Code

```js
const os = require('os');

console.log(' System Information:');
console.log('----------------------');
console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('User:', os.userInfo().username);
console.log('Home Dir:', os.homedir());
console.log('Total Memory:', Math.round(os.totalmem() / (1024 * 1024)) + ' MB');
console.log('Free Memory:', Math.round(os.freemem() / (1024 * 1024)) + ' MB');
console.log('System Uptime:', Math.round(os.uptime() / 3600), 'hours');
console.log('CPU Info:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
````

---

# 🧠 Concept Explanation (Line-by-Line)

## 1️⃣ `const os = require('os');`

Imports Node.js **OS module**.
This module gives access to system information.

---

# 🖥️ System Information Section

## **2️⃣ os.type()**

Returns the operating system name.

Example outputs:

* `Windows_NT`
* `Linux`
* `Darwin` (for macOS)

---

## **3️⃣ os.platform()**

Returns Node.js compiled platform:

Examples:

* `win32` (Windows)
* `linux`
* `darwin` (macOS)

---

## **4️⃣ os.arch()**

Returns CPU architecture type.

Common values:

* `x64`
* `arm64`
* `ia32`

---

## **5️⃣ os.hostname()**

Gives the computer’s network name.

Used in:

* servers
* network identification
* logging

---

## **6️⃣ os.userInfo()**

Returns user account details:

* username
* user ID
* home directory
* shell

Your code extracts only the username:

```js
os.userInfo().username
```

---

## **7️⃣ os.homedir()**

Returns user's home directory.

Examples:

* `C:\Users\Sowmiya`
* `/home/ubuntu`

Used for:

* saving config files
* storing user data

---

# 🧮 Memory Information

## **8️⃣ os.totalmem()**

Total system memory in **bytes**.

You converted it to MB:

```
bytes / (1024 * 1024)
```

Because:

```
1 MB = 1024 × 1024 bytes
```

---

## **9️⃣ os.freemem()**

Shows unused/free RAM at that moment.

Also converted to MB by your code.

---

# ⏳ System Uptime

## **🔟 os.uptime()**

Returns uptime in **seconds**.

You converted seconds → hours:

```
seconds / 3600
```

Because:

```
1 hour = 3600 seconds
```

Useful for:

* server monitoring
* system health checks

---

# 🧠 CPU Information

## **1️⃣1️⃣ os.cpus()**

Returns detailed info for **each CPU core**:

Each core object contains:

* model
* speed
* times { user, sys, idle }

Example output shows **12 cores** (meaning 6 physical + hyperthreading).

Used for:

* load balancing
* performance metrics
* monitoring

---

# 🌐 Network Information

## **1️⃣2️⃣ os.networkInterfaces()**

Returns all network interfaces:

Example fields:

* IP addresses (IPv4/IPv6)
* MAC address
* Loopback (127.0.0.1)
* Wi-Fi / Ethernet adapters

Useful for:

* server networking
* IP-based logging
* diagnostics



# 📊 Example Output (Sample)

```
OS Type: Windows_NT
Platform: win32
Architecture: x64
Hostname: LAPTOP-123ABC
User: Sowmiya
Home Dir: C:\Users\Sowmiya
Total Memory: 8120 MB
Free Memory: 3240 MB
System Uptime: 5 hours
CPU Info: [ ...long array... ]
Network Interfaces: { Wi-Fi: [...], Loopback: [...] }
```

---

# 📌 Use Cases

✔ System monitoring dashboard
✔ DevOps scripts
✔ Environment logging
✔ Diagnostics for backend servers
✔ Hardware inspection

