// Create web server
// Create a web server that listens to a port and returns the comments data.

// 1. Create a new file, comments.js.
// 2. Create a web server that listens on port 3001.
// 3. When a GET request is made to the /comments URL, read the comments.json file and return the data as a JSON response.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'File not found' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
// Run the server using the following command:

// node comments.js
// Open your browser and navigate to http://localhost:3001/comments to see the comments data. You should see the following output:

// [{"id":1,"name":"John Doe","message":"Hello, World!"},{"id":2,"name":"Jane Doe","message":"Hi, there!"}]
// This is the content of the comments.json file. You have successfully created a web server that reads the comments data from the comments.json file and returns it as a JSON response.
