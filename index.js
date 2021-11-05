/**
 * Node-JS Boilerplate
 * @author Yousuf Kalim
 */
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

// Middleware
require("./middleware/common")(app);

// Socket
require("./socket")(io);

// API Routes
app.use("/api", require("./routes"));

// Server
io.sockets.on("error", (e) => console.log(e));
server.listen(port, () => {
  console.log(`Server is running at port ${port} :)`);
});
