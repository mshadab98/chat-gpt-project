require('dotenv').config();
const app = require('./src/app');
const connectDb = require("./src/db/db")
const initSocketServer = require("./src/sockets/socket.server")
const httpServer = require("http").createServer(app)

connectDb();
initSocketServer(httpServer)

httpServer.listen(5050, () => {
    console.log("server is running on port 5050")
})