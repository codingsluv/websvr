const http = require('http');

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Hello, World!' }));
}

const server = http.createServer(requestListener)
const port = 8080
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})