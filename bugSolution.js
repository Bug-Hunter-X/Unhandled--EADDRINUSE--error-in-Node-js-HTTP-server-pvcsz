const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer() {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

function handleError(err) {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Retrying in 1 second...`);
    setTimeout(startServer, 1000);
  } else {
    console.error(`Failed to start server: ${err}`);
  }
}

startServer().catch(handleError);