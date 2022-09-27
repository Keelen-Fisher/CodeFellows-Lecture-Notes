# Authentication

## Securing Passwords [READ:](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

- Explain to a non-technical friend how you would safely hash and store a password.

First, discussion what hashing means: The greatest way to for protecting passwords and are considered to be safe for ensuring the integrity of data or your password. It is the hashes of the hashed password that you see when you type in the text box. The perpetrator doesn't steal your actual password. This, however can still be an issue due to the fact that there are other ways to break into one's password without stealing it. So what I can do is create some sort of collective function that can scramble the password against any attackers.

- What is Bcrypt?

Bcrypt is an adaptive hash function based on the blowfish symmetric block cipher cryptographic algorithm and introduces a security factor. With this, it allows the user to determine how expensive the hash function will be.

- Why might you use something like Bcrypt?

This function can remain to be resistant to brute-force search attacks despite the computation power of the attacker. This can make the process of stealing data to be slower.

## Encoding and encrypting

- What does encrypting mean?  

  - Hides information from everyone using salt and pepper  
    - can only be decypted using a  key
    - salt: random noise/filter
    - pepper: secrete variable
    - Done by bcrypt
    - Can has a password more than once.

We create a hash, when we encrypt.

- Why do we encrypt:
  - safeguard information
  - manage liability

## Basic Auth [READ:](https://en.wikipedia.org/wiki/Basic_access_authentication)

- What is Basic Authentication?

***Authentication*** - are you who you say you are?
***Authorization***- are you allowed to do the "thing" based on the role you have been given?

Basic Access Authentication is a method that provides a user name and password for the user when making a request.

- What properties are necessary in the header of a Basic Auth request?

You will need Authorization: Basic `<credentials>`

- How are username:password in Basic Auth encoded?

Essentially, they are merely encoded with Base64, which is a group of binary-to-text schemes that represent binary data in sequences of 24 bits.

## OWASP Auth Cheatsheet [READ:](https://www.owasp.org/index.php/Authentication_Cheat_Sheet)

- Define the authentication process to a non-technical recruiter.

Authentication process is a way to verify the user and ensure that they are who they say they are and not someone else.

- How should your error messaging respond (both HTTP and HTML)? Why?

It should respond in a generic manner, because it is important to only share that there is an error and not why there is an error. This promotes security and over explanition.

- Bookmark this link also and consider OWASP fundamentals any time you interact with authentication. Applications developed with security in mind from inception have fewer vulnerabilities throughout their lifecycle.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
