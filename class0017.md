# AWS: S3 and Lambda

## AWS S3 [VIEW](https://aws.amazon.com/s3/)

- What is Amazon S3?

"It is an object storage service  offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps."

- Name some use cases for Amazon S3.

- Build a data Lake:
  - Run big data analytics, artificial intelligence (AI), machine learning (ML), and high performance computing (HPC) applications to unlock data insights.

- Back up and restore critical data
  - Meet Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and compliance requirements with S3’s robust replication features.

- Name some benefits of using Amazon S3.

"With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements"

- Bucket:

Object Storage.

## AWS Lambda Basics [VIEW](https://www.serverless.com/aws-lambda)

- What is AWS Lambda?

AWS Lambda is a serverless computing service provided by Amazon Web Services (AWS). Users of AWS Lambda create functions, self-contained applications written in one of the supported languages and runtimes, and upload them to AWS Lambda, which executes those functions in an efficient and flexible manner.

It is a function with a specific syntax.

This: `=>` is a "fat arrow": in lambda, and javaScript arrow function

- Name some use cases for AWS Lambdas.

1. individual tasks run for a short time;
2. each task is generally self-contained;
3. there is a large difference between the lowest and highest levels in the workload of the application.

- Describe “serverless” to a non-technical friend.

This means that you do not need to constantly over look the server in order to build and run functions that youve created. This decreases the amount of headache that you may endure.

A lot more servers at AWS, meaning that there will be a smaller amount of big monolithic servers that has to handle all things. Instead we have a series of (micro) services potentially hosted on the cloud. Think cloud computing, think aws managing infrastructure

## CDN [VIEW](https://cyberhoot.com/cybrary/content-delivery-network-cdn/)

- What is a CDN?

A Content Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of Internet content. A CDN allows for the fast transfer of data needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

- CDNs work through servers nearest to the website visitor respond to the request. The content delivery network copies the pages of a website to a network of servers that are spread out at geographically different locations, caching the contents of the page. When a user requests a webpage that is part of a content delivery network, the CDN will redirect the request from the originating site’s server to a server in the CDN that is closest to the user and deliver the cached content. CDNs will also communicate with the originating server to deliver any content that has not been previously cached. In turn, the speed is improved by distributing content closer to the website visitors by using a nearby CDN server, causing visitors to experience faster page loading times.

- What are the benefits of employing a CDN?

Employing a CDN doesn’t only speed up the delivery of Internet content, it helps protect your website against certain forms of cyber attacks, such as Denial of Service attacks. It protects against these threats because CDNs allow for the handling of more traffic and withstanding hardware failure better than many origin servers.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
