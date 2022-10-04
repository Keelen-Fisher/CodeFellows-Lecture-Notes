# Socket.io

## Web Sockets [READ](https://en.wikipedia.org/wiki/WebSocket)

- What is a Web Socket?

It is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.

- Describe the Web Socket request/response handshake and what happens once the connection is established.

The WebSocket handshake uses the [HTTP Upgrade Header](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header) to change from the HTTP protocol to the WebSocket protocol.

- Web Sockets provide a standardized way for the server to send content to a client without first receiving a ***Request*** from that client.

## Socket.io Tutorial [READ](https://www.tutorialspoint.com/socket.io/)

- What does the event handler io.on() do?

This handles the connection and disconnection of the event using the socket object.

- Describe some possible proof of life or proof that the code works as expected

Log messages in the terminal with every connect and disconnect.

- What does socket.emit() do?

socket.emit() sends a message to all the connected clients.

## Socket.io vs Web Socket [READ](https://www.educba.com/websocket-vs-socket-io/)

- What is the difference between WebSocket and Socket.IO? (think Git and GitHub, or OAuth and Auth0).

WebSocket is the communication Protocol that provides bidirectional communication between the Client and the Server over a TCP connection; WebSocket remains open all the time, so they allow real-time data transfer. When clients trigger the request to the server, it does not close the connection on receiving the response; it rather persists and waits for the Client or server to terminate the request.

Socket.IO is a library that enables real-time and full-duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface. Generally, it is divided into two parts; both WebSocket vs Socket.io are event-driven libraries.

- When would you use Socket.IO?

Whenever you need to use event based communication between browser and server.

- Why do we need WebSocket?

It provides full-duplex communication, which helps in persisting the connection established between the Client and the Web Server. It also lives up to the standards and provides the accuracy and efficiency stream events to and from with negligible latency. WebSocket removes the overhead and reduce complexity. It makes real-time communication effortless and efficient

## OSI Model Explained [Watch](https://www.youtube.com/watch?v=vv4y_uOneC0)

- What are a couple of key takeaways from this video?

## TCP Handshakes Explained [Watch](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

- Translate the gist of this video to a non-technical friend

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
