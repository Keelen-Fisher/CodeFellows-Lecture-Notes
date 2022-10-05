# Message Queues

## Socket.io Chat Example [READ:](https://socket.io/get-started/chat/)

- Explain to a non-technical recruiter what the Chat Example does.

In this example, socket.io is used to build the application. This allows multiple users to connect to one server and interact.

- What proof of life are we getting on the backend from the app?

By the console.log from the when the user is connected to the server.

- Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?

The .broadcast flag

## Rooms [READ:](https://socket.io/docs/v4/rooms)

- What is a room and how might a room be useful?

A room is an arbitrary channel that sockets can `join` and `leave`. This can be used to broadcast events to a subset of clients.

- How do you join a room?

First thing to do is to cal `join` to subscribe to a given channel:

    io.on("connection", (socket) => {
     socket.join("some room");
      });

Then, use `to` or `in` when broadcast or emitting.

    io.to("some room").emit("some event");

- how do you leave a room?

You can set up a socket.on("disconnect"):

    socket.on("disconnect", () => {
    // socket.rooms.size === 0
  });

## Namespaces [READ](https://socket.io/docs/v4/namespaces/)

- What is a Namespace and what does it allow you to do?

A namespace is a communication channel that allows you to split the logic of an application over a single shared connection.

- Each namespace potentially has its own what:

### event handlers

    io.of("/orders").on("connection", (socket) => {
      socket.on("order:list", () => {});
      socket.on("order:create", () => {});
      });

    io.of("/users").on("connection", (socket) => {
    socket.on("user:list", () => {});
    });

### rooms

const orderNamespace = io.of("/orders");

    orderNamespace.on("connection", (socket) => {
      socket.join("room1");
      orderNamespace.to("room1").emit("hello");
    });

    const userNamespace = io.of("/users");

    userNamespace.on("connection", (socket) => {
      socket.join("room1"); // distinct from the room in the "orders" namespace
      userNamespace.to("room1").emit("holà");
    });

### Middleware

    const orderNamespace = io.of("/orders");

    orderNamespace.use((socket, next) => {
      // ensure the socket has access to the "orders" namespace, and then
      next();
    });

    const userNamespace = io.of("/users");

    userNamespace.use((socket, next) => {
      // ensure the socket has access to the "users" namespace, and then
      next();
    });

- Discuss a possible use case for separate namespaces

You can create a special namespace that only authorized users have access to, to the logic related to those users is separate from the rest of the application.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
