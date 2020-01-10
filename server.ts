const fastify = require('fastify')({
  logger: true,
});

const app = fastify;
const server = app.listen(4000, '0.0.0.0');
const io = require('socket.io')(app.server);

const emitVisitors = () => {
  io.emit('visitors', getVisitors());
};

const getVisitors = () => {
  let clients = io.sockets.clients().connected;
  let sockets = Object.values(clients);
  let users = sockets.map((socket: any) => socket.user);
  // clearing array because we have a lot undefined
  return users.filter(Boolean);
};

io.on('connection', socket => {
  console.log('a user connected');
  emitVisitors();

  socket.on('newUser', user => {
    console.log('newUser', user);
    socket.user = user;
    emitVisitors();
  });

  socket.on('disconnect', () => {
    console.log('a user Disconnected');
    emitVisitors();
  });
});
