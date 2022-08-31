# CRUD

## Which HTTP Status Code to Use for Every CRUD App

100’s = Informal status codes, tells the client that the header part of the request has been received and the server will try to comply with a transmission demand of the client.
200’s = Success codes, this tells the client that its request was accepted
300’s = Redirection codes. The resource isn't available at the expected location anymore.
400’s = Client error codes. They are all about invalid requests a client sent to a server. There are several causes to this, timeouts, wrong URI, missing authentication, etc.
500’s = These are the server error codes. Often they indicate problems with overwhelmed servers or unreachable servers behind proxies, but sometimes they can be directly related to client requests that trigger error exceptions on the server.

What is a status code 202?
In case of asynchronous processing of a request (202), this doesn’t mean the request was successfully processed only that it met all validation requirements at the time of sending.

What is a status code 308?
Permanent Redirect - This tells the client to use another URL to access the resource and not use the current URL anymore. It’s helpful when we have multiple endpoints for one resource, but don’t want to implement reading from all of them.

- What code would you use if an update didn’t return data to a client?
`204`

- What code would you use if a resource used to exist but no longer does?
`400`

- What is the ‘Forbidden’ status code?
`403`

## Build A REST API With Node.js, Express, & MongoDB

- Why do we need to pull our MongoDB database string out of our server and put it into our .env?
In order to use our data in our front end to render information in the page while keeping our key safe and secure. In addition whenever we deploy our website we don't want it from local host, so it needs to be in environment.

- What is middleware?
Code that runs when the server gets the request before it gets to the routes.

- What does app.use(express.json()) do?
We can use any: Lets our server accept json as a body inside of a post element.

- What does the /:id mean in a route?
Means that this is a parameter which gives us access to whatever info you're looking for.

- What is the difference between PUT and PATCH?
Put wants to update all information whether they are passed or not, whereas patch only want to update specific information that is passed.

- How do you make a default value in a schema?
create new mongoose.Schema with object lists.

- What does a 500 error status code mean?
a generic error response. It means that the server encountered an unexpected condition that prevented it from fulfilling the request. This error is usually returned by the server when no other error code is suitable.

- What is the difference between a status 200 and a status 201?
The 200 status code is by far the most common returned. It means, simply, that the request was received and understood and is being processed. A 201 status code indicates that a request was successful and as a result, a resource has been created (for example a new page).

[Build A REST API With Node.js, Express, & MongoDB](https://www.youtube.com/watch?v=fgTGADljAeg)

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
