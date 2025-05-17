# 🌱 NodeFarm

NodeFarm is a basic Node.js-based server-side web application that demonstrates how to build a simple e-commerce-like interface without any external frameworks. It uses core Node modules to serve HTML pages, render templates, handle routing, and display product data.


---

## 🚀 Features

- Dynamic Overview Page (Lists all products)
- Individual Product Pages
- Custom Templating using String Replacement
- URL-based Routing (e.g., `/product?id=1`)
- Built-in 404 Error Handling
- Simple API Endpoint (`/api`)

---

## 🛠 Tech Stack (Internal Only)

This project uses only core Node.js modules — no third-party packages or frameworks.

- **Node.js**
  - `http` — To create the server
  - `fs` — To read HTML templates and JSON data
  - `url` — To parse incoming request URLs
  - `path` — (implicitly handled via `__dirname` for safe file paths)

---

## 📚 Node.js Methods & Concepts Used

| Module | Methods / Concepts Used |
|--------|--------------------------|
| `http` | `http.createServer()`<br>`res.writeHead()`<br>`res.end()` |
| `fs` | `fs.readFileSync()` |
| `url` | `url.parse(req.url, true)` |
| `global` | `__dirname` (used for path resolution) |
| `JavaScript` | `map()`, `join()`, `replace()` for templating |

---



## ▶️ How to Run

1. Make sure Node.js is installed.

2. Clone the repo:

```bash
git clone https://github.com/Nawazishkarim07/NodeFarm.git
cd NodeFarm

node Lec13-15.js
http://127.0.0.1:8001


---
