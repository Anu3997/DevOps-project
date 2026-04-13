const http = require("http");

const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || "v1";

const server = http.createServer((req, res) => {
  res.end(`Hello from DevOps Project - Version ${version}`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});