# AWS: API, Dynamo and Lambda

## AWS API Gateway Overview [READ](https://www.serverless.com/amazon-api-gateway)

- What is Amazon API Gateway?

API Gateway sits between the backend services of your API and your API’s users, handling the HTTP requests to your API endpoints and routing them to the correct backends.

API Gateway integrates with many other AWS services like AWS Lambda, AWS SNS, AWS IAM, and Cognito Identity Pools. These integrations allow for fully managed authentication and authorization layers, as well as detailed metrics and tracing for API requests.

- Why is Amazon API Gateway an important part of the Serverless ecosystem?

Within the Serverless ecosystem, API Gateway is the piece that ties together Serverless functions and API definitions. Being able to trigger the execution of a Serverless function directly in response to an HTTP request is the key reason why API Gateway is so valuable in Serverless setups

- How does API Gateway integrate with other AWS services?

Many AWS services support integration with Amazon API Gateway, including:

    - AWS Lambda: run Lambda functions to generate HTTP API responses.
    - AWS SNS: publish SNS notifications when an HTTP API endpoint is accessed.
    - Amazon Cognito: provide authentication and authorization for your HTTP APIs.

## AWS API Gateway [READ](https://aws.amazon.com/api-gateway/)

- What are the some benefits of using Amazon API Gateway?

Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications.

- What two API types might you choose from?

  - [RESTful APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)
  - [WEBSOCKET APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html)

## AWS DynamoDB Guide [READ](https://www.dynamodbguide.com/what-is-dynamo-db/)

- What is DynamoDB?

Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools.

it is also a hosted NoSQL database offered by Amazon Web Services (AWS). It offers:

    - reliable performance even as it scales;
    - a managed experience, so you won't be SSH-ing into servers to upgrade the crypto libraries;
    - a small, simple API allowing for simple key-value access as well as more advanced query patterns.

- Under what circumstances would you recommend DynamoDB over MongoDB?

Could be more secure, and faster.

## AWS DynamoDB [READ](https://aws.amazon.com/dynamodb/)

- Explain to a non-technical friend how DynamoDB works.

This is a database (collection of data) that builds on fast and flexible service through amazon. This also has built in security with back up and restore, and more with storing memory.

## Dynamoose [READ](https://dynamoosejs.com/getting_started/Introduction)

- What is Dynamoose?

Dynamoose is a modeling tool for Amazon's DynamoDB. Dynamoose is heavily inspired by Mongoose, which means if you are coming from Mongoose the syntax will be very familiar.

- What are some key features of Dynamoose?

  - Type safety
  - High level API
  - Easy to use syntax
  - DynamoDB Single Table Design Support
  - Ability to transform data before saving or retrieving items
  - Strict data modeling (validation, required attributes, and more)
  - Support for DynamoDB Transactions
  - Powerful Conditional/Filtering Support
  - Callback & Promise support
  - AWS Multi-region support

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
