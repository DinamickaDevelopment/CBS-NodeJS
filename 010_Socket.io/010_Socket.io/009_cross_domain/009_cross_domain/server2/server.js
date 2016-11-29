// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');

var port = process.env.port || 3000;

io.on('connection', function (socket) {
    socket.emit('greet');
}); 

server.listen(port, function () {
    console.log('app running on port ' + port);
})
