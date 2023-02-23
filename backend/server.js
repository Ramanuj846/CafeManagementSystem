require("dotenv").config();
var http = require("http");
const app = require('./index');
require('./connection')
const server = http.createServer(app);
server.listen(process.env.port);