const express = require('express');
const app = express();
const path = require('path');
const { Server } = require("socket.io");
// Start server
const server = app.listen(5003, () => {
  console.log('server running at http://localhost:5003');
});
// Create socket server
const io = new Server(server);
// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.html'));
});
// Socket events
io.on('connection', (socket) => {
  console.log('user is connected');
  // Receive name
  socket.on('myname', (name) => {
    io.emit('myname', name);
  });
  // Receive message
  socket.on('chatmess', (mess) => {
    io.emit('chatmess', mess);
  });
});
