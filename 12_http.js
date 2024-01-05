const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the HomePage");
  }
  if (req.url === "/about") {
    res.end("Here is our short History");
  }
  res.end(`
        <h1>Oops!!!</h1>
        <p>Seems we can't find the page you are looking for</p>
        <a href='/'>Back to Home</a>
  `);
});

server.listen(4449);
