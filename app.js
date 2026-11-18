const express = require('express');
const app = express();
const port = 8080;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chayapol</title>
  <style>
    :root {
      --bg: #fafafa;
      --text: #18181b;
      --muted: #71717a;
      --border: #e4e4e7;
      --dot: #10b981;
    }
    body.dark {
      --bg: #09090b;
      --text: #fafafa;
      --muted: #a1a1aa;
      --border: #27272a;
      --dot: #34d399;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    body {
      margin: 0;
      height: 100vh;
      display: grid;
      place-items: center;
      font-family: system-ui, -apple-system, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      transition: background-color 0.2s, color 0.2s;
      animation: fadeIn 0.4s ease-out;
    }
    button {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      background: transparent;
      border: 1px solid var(--border);
      color: var(--muted);
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      font-family: inherit;
      transition: border-color 0.2s, color 0.2s;
    }
    button:hover {
      color: var(--text);
      border-color: var(--text);
    }
    main {
      text-align: center;
      padding: 2rem;
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--muted);
      margin-bottom: 1rem;
      border: 1px solid var(--border);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
    }
    .dot {
      width: 6px;
      height: 6px;
      background-color: var(--dot);
      border-radius: 50%;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      margin: 0 0 0.5rem 0;
    }
    p {
      color: var(--muted);
      margin: 0 0 1.5rem 0;
      font-size: 1.1rem;
    }
    nav {
      display: flex;
      gap: 1.25rem;
      justify-content: center;
    }
    a {
      color: var(--muted);
      text-decoration: none;
      font-size: 0.95rem;
      border-bottom: 1px solid transparent;
      padding-bottom: 2px;
      transition: color 0.2s, border-color 0.2s;
    }
    a:hover {
      color: var(--text);
      border-bottom-color: var(--text);
    }
  </style>
</head>
<body>
  <button id="toggle" aria-label="Toggle dark mode">Theme</button>
  <main>
    <div class="status">
      <span class="dot"></span> Available for work
    </div>
    <h1>Hello World!</h1>
    <p>I'm Chayapol.</p>
    <nav>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a>
      <a href="mailto:you@example.com">Email</a>
    </nav>
  </main>
  <script>
    const btn = document.getElementById('toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check initial OS preference
    if (prefersDark.matches) {
      document.body.classList.add('dark');
    }

    btn.onclick = () => {
      const isDark = document.body.classList.toggle('dark');
      btn.textContent = isDark ? 'Light' : 'Dark';
    };
  </script>
</body>
</html>
`;

app.get('/', (req, res) => res.send(html));

app.listen(port, () => {
  console.log('App running on http://localhost:' + port);
});
