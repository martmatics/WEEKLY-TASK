const http = require("http");
const fs = require("fs");
const url = require('url');

const hostname = '127.0.0.1'
const port = 5050



// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   const q = url.parse(req.url, true);
//   const page = "." + q.pathname;
  
//     fs.readFile(page, (err, data) => {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//           } 
//           res.writeHead(200, {'Content-Type': 'text/html'});
//           res.write(data);
//           return res.end();
//     })
// })
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
      path = "./pages/index.html";
      status = 200;
    } else if (req.url === "/about" || req.url === "/about-us") {
      path = "./pages/about.html";
      status = 200;
    } else if (req.url === "/contact") {
      path = "./pages/contact.html";
      status = 200;
    } else {
      path = "./pages/error.html";
      status = 404;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        return console.error(err);
      }
      res.writeHead(status, { "Content-Type": "text/html" });
      res.end(data);
      console.log(`Client requested ${req.url}.`);
      console.log(`Client was served ${path}.`);
    });
  })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
