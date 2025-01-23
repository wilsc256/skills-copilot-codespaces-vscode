// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Read the content of the file
// 4. Send the content to the client

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/comments':
      path += 'comments.json';
      break;
    default:
      path += '404.html';
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(5000, 'localhost', () => {
  console.log('Server is running on http://localhost:5000');
});
