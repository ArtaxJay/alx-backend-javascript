const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT);

module.exports = app;
