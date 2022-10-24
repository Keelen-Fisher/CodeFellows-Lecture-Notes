# AWS: Events

## AWS SQS vs SNS [READ](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

- What is SNS? Simple Notification Service (can be standard or FIFO)

  - Topic: A single event in SNS (4 CAPS: PICKUP, TRANSIT, DELIVERED, RECEIVED)
  
- SQS: Simple Queue Service (can be standard or FIFO)

- What is the difference between SQS and SNS?

SNS is a distributed publish-subscribe service.  Messages are pushed to subscribers as and when they are sent by publishers to SNS. It also supports several end points such as email, sms, http end point and SQS.

SQS is distributed queuing service. A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

- What are some use cases for both SNS and SQS?

  - Choose SNS if:

    - You would like to be able to publish and consume batches of messages.
    - You would like to allow same message to be processed in multiple ways.
    - Multiple subscribers are needed.
  
  - Choose SQS if:

    - You need a simple queue with no particular additional requirements.
    - Decoupling two applications and allowing parallel asynchronous processing.
    - Only one subscriber is needed.

## AWS SNS and SQS [WATCH](https://www.youtube.com/watch?v=mXk0MNjlO7A)

- Describe how to use SQS and SNS in a “fanout” pattern.

Fan-out is a messaging pattern where messages are broadcast in a one-to-many arrangement. A basic example of this pattern can be seen in the functionality of a Publish/Subscribe messaging system.

- Explain how “push notifications” work, using SNS.

Push notification services, such as APNs and FCM, maintain a connection with each app and associated mobile device registered to use their service. When an app and mobile device register, the push notification service returns a device token. Amazon SNS uses the device token to create a mobile endpoint, to which it can send direct push notification messages.

## SQS and SNS Basics

- How might a large scale, distributed application make use of a Queue system like SQS?

The queue is impactful due to the storage of data for users who can not view the messages at the designated time within the program.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
