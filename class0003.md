# Express REST API

## Review: ES6 Classes [READ:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

- Classes are a template for creating objects.

- While the class is hoisted its values are not initialized.

- How would you describe a constructor and contextual “this” to a non-technical friend?

  - "this" is determined by how a collection of data is called.

## Using Express Routing [READ:](https://expressjs.com/en/guide/routing.html)

- Routing refers to how an application’s endpoints (URIs) respond to client requests.

- What is the difference between a route path and a route method?

  - Route Method: derived from one of the HTTP methods, and is attached to an instance of the express class.
  - Route paths: Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

- With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback.

## Express Routing [READ:](https://www.digitalocean.com/community/tutorials/learn-to-use-the-new-router-in-expressjs-4)

- Express router is a mini express application without all the bells and whistles of an express application, just the routing stuff.

- By what mean do we initialize express.Router() in an express server?

      -  get an instance of router: let router = express.Router();

- What do we use route middleware for?

  - Route middleware in Express is a way to do something before a request is processed.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
