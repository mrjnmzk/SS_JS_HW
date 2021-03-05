const os = require('os');
const personalmodule = require('./personalmodule');
const http = require("http");
http.createServer(function (request, response) {
    let name = os.userInfo().username;
    let date = new Date();
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<p> Date of request: " + date + "</p>");
    response.write("<p>" + personalmodule.greetUser(name, date) + "</p>");
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');