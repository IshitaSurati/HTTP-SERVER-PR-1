const http = require("http");

const PORT = process.env.PORT || 8090;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/html' });
    
    if (req.url === "/") {
        res.end("<h1>Home Page</h1>");
    }
    else if (req.url === "/login") {
        res.end("<h1>Login Page</h1>");
    }  
    else if (req.url === "/signup") {
        res.end("<h1>Signup Page</h1>");
    }
    else if (req.url === "/contact") {
        res.end("<h1>Contact Page</h1>");
    }
    else if (req.url === "/service") {
        res.end("<h1>Service Page</h1>");
    }
    else {
        res.writeHead(404, { 'content-Type': 'text/html' });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});