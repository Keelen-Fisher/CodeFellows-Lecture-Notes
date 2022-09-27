# Bearer Authorization

## Intro to JWT [READ:](https://jwt.io/introduction/)

- What is a JSON Web Token (JWT)?

It is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object.

- What is the anatomy of a token?

  - a. header
  - b. payload: data content / body (username, password, roles)
  - c. signiture: SECRET -> this is how we keep out JWT secure.

- When should we use JSON Web Tokens?

Should be used when:

    - Authorization: A common scenario of using JWT/ Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

    - Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. 

- Claims are expected in which structural component of a JWT?

Within the payload structure.

## Are JWTs Secure [READ:](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

- If I get a JWT and I can decode the payload, how can we call that secure?

Because the payload encrypted separate from JWT making it difficult to decode.

- If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.

This equation:
    - Hash(payload + secret)

- Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.

 From the Document:

 >> Let's assume Alice wants to send a JWT to Bob. They both know some shared secret. Mallory doesn't know that secret, but wants to interfere and change the JWT. To prevent that, Alice calculates Hash(payload + secret) and appends this as signature.

To continue:

>> When receiving the message, Bob can also calculate Hash(payload + secret) to check whether the signature matches. If however, Mallory changes something in the content, she isn't able to calculate the matching signature (which would be Hash(newContent + secret)). She doesn't know the secret and has no way of finding it out. This means if she changes something, the signature won't match anymore, and Bob will simply not accept the JWT anymore.

## [WATCH:](https://www.youtube.com/watch?v=926mknSW9Lo) JWT's Explained

- Why use JWT?

To securely transfer information between any two bodies (any two users, servers, etc.), and it is digitally signed and information is verified.

- JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.

This is a fast route to make JWT so much more useful, and it also means that it can hold its own information inside of the Token.

- What are the three components (the structure) of a JWT signature?

  - Header
  - Payload
  - Signature

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
