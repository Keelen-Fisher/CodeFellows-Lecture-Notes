# APIS

## API Design Best Practices

- In 2000, Roy Fielding proposed Representational State Transfer (REST) as an architectural approach to designing web services. REST is an architectural style for building distributed systems based on hypermedia. REST is independent of any underlying protocol and is not necessarily tied to HTTP. However, most common REST API implementations use HTTP as the application protocol, and this guide focuses on designing REST APIs for HTTP.

- REST APIs are designed around `resources`, which are any kind of object, data, or service that can be accessed by the client.

- A resource has an identifier, which is a URI that uniquely identifies that resource. Example: [https://adventure-works.com/orders/1].

- REST APIs use a uniform interface, which helps to decouple the client and service implementations. For REST APIs built on HTTP, the uniform interface includes using standard HTTP verbs to perform operations on resources. The most common operations are GET, POST, PUT, PATCH, and DELETE.

- When possible, resource URIs should be based on nouns (the resource) and not verbs (the operations on the resource).

- Give an example of a good URI:

[https://adventure-works.com/orders] // Good

[https://adventure-works.com/create-order] // Avoid

- Another factor is that all web requests impose a load on the web server. The more requests, the bigger the load. Therefore, try to avoid "chatty" web APIs that expose a large number of small resources. Such an API may require a client application to send multiple requests to find all of the data that it requires. Instead, you might want to denormalize the data and combine related information into bigger resources that can be retrieved with a single request. However, you need to balance this approach against the overhead of fetching data that the client doesn't need.

- What status code does a successful GET request return? `200`

- What status code does an unsuccessful GET request return? `404`

- What status code does a successful POST request return? `201`

- What status code does a successful DELETE request return? `204`

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
