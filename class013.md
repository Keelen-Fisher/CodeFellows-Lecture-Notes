# More CRUD

## CRUD Basics

![CRUD Operations Explained](Images/CRUD%20Process.png)

- Which HTTP method would you use to update a record through an API?
PUT is an HTTP method used to update resources. As opposed to replacing resources.

- Which REST methods require an ID parameter?
POST method requires an ID Parameter

[SPEED RUN: Build a CRUD API with Node.js + Express + MongoDB](https://www.youtube.com/watch?v=EzNcBhSv1Wo)

- What’s the relationship between REST and CRUD?
REST applications are built around resources (as outlined in the Uniform Interface constraint), which can be created, read, updated, and deleted, just like entries in a collection of data.
CRUD is a cycle meant for maintaining permanent records in a database setting. CRUD principles are mapped to REST commands to comply with the goals of RESTful architecture.

- If you had to describe the process of creating a RESTful API in 5 steps, what would they be?

  - Build a server.js and don't forget you installation process by install express to have your routes and middleware
  - In your server.js, build your requirements and then build your route. First route is app.get, then you will need to create by making a .post, a way to update by making a .put, and to delete by making a .delete.
  - Build your port in the .env, then go to the server.js to set a PORT variable equal to your key value in the .env file.
  - Set your Mongo API by grabbing your connection Key from the Database, set that into your .env file, then set the mongoose.connection.
  - Implement your try/catch in each app.methods and test your routes either in your local host website or using a file extension called ThunderClient.
  
### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
