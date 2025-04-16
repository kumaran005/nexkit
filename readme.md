# NexKit ⚡️

> A minimal, TypeScript-native HTTP framework built on raw `net` module for speed, simplicity, and full control.

---

## 🚀 Features

- 🔧 Built from scratch using Node.js `net` module
- 🛡️ Type-safe routing with TypeScript support
- 🧩 Lightweight and minimal, no unnecessary abstractions
- 🗃️ Easy to extend with middleware and plugins
- 🔥 Zero dependencies (except for optional dev tools)

---

## 📦 Installation

```bash
npm install nexkit
```

## 🧪 Quick Start

> The fastest way to get started with Nexkit

### 1. Create a new file

```ts
// app.ts
import { NexKit } from 'nexkit';

const app = new NexKit();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Nexkit!</h1>');
});

app.listen(3000);
```

## ✨ API

```ts
app.get(path: string, handler: Handler)
//Registers a GET route.

app.post(path: string, handler: Handler)
//Registers a POST route.

app.listen(port: number, callback?: () => void)
//Starts the TCP server on the specified port.

```

### 📃 License

MIT © 2025
