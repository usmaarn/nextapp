const {createServer}  = require('http');
const { Server } = require('socket.io');


const server = createServer();

const io = new Server(server, {
    cors: {
        origin: '*',
    }
})

io.on('connection', (socket) => {
    io.emit('message', "message from server")
})

server.listen(5000)