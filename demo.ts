import { NexKit, Request, Response } from './src';
const app = new NexKit();

// Basic GET route
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to NetKit Framework</h1>');
});

// Another route
app.get('/about', (req: Request, res: Response) => {
  res.send('<p>This is a lightweight Node.js framework built with TCP.</p>');
});

// POST route example
app.post('/api/data', (req: Request, res: Response) => {
  res.send(`<h3>Received data:</h3><pre>${req.body}</pre>`, 'text/html');
});

// Start server
app.listen({ port: 8080 });
