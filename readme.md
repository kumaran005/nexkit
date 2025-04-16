# Nexkit ⚡️

> A lightweight, TypeScript-first web framework built over Node’s native `net` module — perfect for learning, customizing, and creating blazing-fast backend apps.

---

## ✨ Features

- ⚡ Built on Node.js `net` module (no `http` dependency)
- 💎 Fully written in TypeScript
- 🧩 Middleware-ready architecture
- 📦 Tiny, fast, and modular
- 🎯 Developer-friendly design

---

## 📦 Installation

```bash
npm install nexkit
```

> Requires Node.js 18+ and TypeScript

---

## 🧪 Quick Start

> The fastest way to get started with Nexkit

### 1. Create a new file

```ts
// demo.ts
import { NexkitApp } from 'nexkit';

const app = new NexkitApp();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Nexkit!</h1>');
});

app.listen({ port: 3000 });
```

### 2. Run it using tsx

```bash
npx tsx demo.ts
```

> You should see:  
> `🚀 Nexkit server is running at http://localhost:3000`

---

## 📁 Project Structure (Example)

```
nexkit/
├── src/
│   ├── core/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── router.ts
│   │   ├── response.ts
│   │   ├── parser.ts
│   │   └── types.ts
│   ├── utils/
│   │   └── logger.ts
│   └── index.ts
├── demo.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Usage

You can define routes using `.get()` or `.post()`:

```ts
app.get('/hello', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.post('/submit', (req, res) => {
  res.send(`Received POST body: ${req.body}`);
});
```

---

## ⚙️ TypeScript Setup

Your `tsconfig.json` should use `NodeNext`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "declaration": true,
    "baseUrl": "./src",
    "paths": {
      "@core/*": ["core/*"],
      "@utils/*": ["utils/*"]
    }
  },
  "include": ["src"]
}
```

---

## 🛠 CLI (coming soon)

A simple CLI tool for bootstrapping Nexkit projects is in development. Stay tuned!

---

## 🤝 Contributing

Pull requests are welcome! To get started:

```bash
git clone https://github.com/kumaran005/nexkit.git
cd nexkit
npm install
```

Please open issues or PRs for any enhancements or bugs.

---

## 📃 License

MIT © 2025

---

## 🌐 Author

Made with ❤️ by **Rajakumaran**

