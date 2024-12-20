const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/data.json') {
    fs.readFile('./data.json', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.writeHead(500); // Internal Server Error
        res.end(JSON.stringify({ error: 'Failed to read data' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    res.writeHead(404); // Not Found
    res.end('Not Found');
  }
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));