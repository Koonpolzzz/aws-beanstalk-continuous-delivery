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
    body {
      margin: 0;
      height: 100vh;
      display: grid;
      place-items: center;
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #fafafa;
      color: #18181b;
    }
    main {
      text-align: center;
      padding: 2rem;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      margin: 0 0 0.5rem 0;
    }
    p {
      color: #71717a;
      margin: 0;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <main>
    <h1>Hello World!</h1>
    <p>I'm Chayapol.</p>
  </main>
</body>
</html>
`;

app.get('/', (req, res) => res.send(html));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
