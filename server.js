const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

// Create HTTP server to serve the HTML and JS files
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'GET' && req.url === '/app.js') {
        fs.readFile(path.join(__dirname, 'app.js'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading app.js');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            }
        });
    }
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

let userCount = 0;

wss.on('connection', (ws) => {
    userCount++;
    broadcastUserCount();

    ws.on('close', () => {
        userCount--;
        broadcastUserCount();
    });
});

function broadcastUserCount() {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(userCount);
        }
    });
}

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
