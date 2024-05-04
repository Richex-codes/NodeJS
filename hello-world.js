const http = require("http");
const fs = require("fs");

console.log("hello world");
const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!</h1>");
  res.end();
});

server.listen(3000, (err, data) => {
  if (err) {
    console.log("something went wrong", err);
  } else {
    console.log("server is listening on port 3000");
  }
});

// hello-world.js


// Step 1: Create a file named "welcome.txt" containing "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File "welcome.txt" created successfully!');
});

// Step 2: Read the content of "welcome.txt" and log it to the console
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Content of "welcome.txt":', data);
});
