# API Integration

## Review API Server Build [READ](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)

- Explain the different between a query string parameter and a path parameter.

  - Query String Parameter: Passed as a parameter and defines sort, pagination, and/or filter operations.

  - Path Parameter: Determines the source of a location.

- What would our API URL with a path id parameter be given the following information:
  - Domain: http://our-site.com
  - v3
  - model name: stuff
  - id: things

- We have created a dynamic API with an “interface”. Describe how that interface works to a non-technical friend.

  - You can relate the dynamic interface as a user who does a research or looks up a site in a text bar, to direct you to a source that aligns with the route directed.

## Review Auth Server Build [READ](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/)

- Describe how you would use middleware to implement basic and bearer auth.

  - The ***Basic Authentication*** processes is initiated by invoking a POST on your /oauth route with a Basic Authorization header. The Basic Auth Middleware should at this point validate the user account in our database, and return an object with a re-authentication/bearer token and the user object or an error object

  - The ***Bearer Authentication*** process is built on Re-Authentication, which can be achieved on any route in the express server, not just the authentication routes.

- Describe the handshake necessary to implement OAuth.

- The OAuth processes is initiated in the browser, using a 3rd party authentication/authorization service. It will, once the user has granted permission, invoke a GET on your /oauth route. The OAuth middleware should at this point complete the handshaking process, create/update a local user account in our database, and return an object with a re-authentication/bearer token and the user object

- Describe how Role Based Access Control works to a non-technical friend.

  - You have a system, or more specifically, an application that has options to make changes in the data that you created. You want to make this more public to a lot more people but you don't want to give the benefits to all members who join. You create those roles and the way that is possible is by Role Based Access Control.

## Reflection

- What are your learning goals after reading and reviewing the class README?

   I intend to learn more about user roles and how they interact with React, along with how to use more methods from cookies.

[Home](https://keelen-fisher.github.io/new-repository/)
