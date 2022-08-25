# Functional Programming: Creating your server.js with Tutorial for how to use Modules and Require()

## Functional Programming Concepts

- Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data

- The first fundamental concept we learn when we want to understand functional programming is pure functions. But what does that really mean? What makes a function pure?

How to know if a function is pure or not? Here is a very strict definition of purity:

It returns the same result if given the same arguments (it is also referred as deterministic)
It does not cause any observable side effects

- The code’s definitely easier to test. We don’t need to mock anything. So we can unit test pure functions with different contexts:

Given a parameter A → expect the function to return value B
Given a parameter C → expect the function to return value D

- When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.

- Basically, if a function consistently yields the same result for the same input, it is referentially transparent.

pure functions + immutable data = referential transparency

## Node JS Tutorial for Beginners-Modules and require()

- A module in JavaScript is just a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

- require keyword() refers to a function which is used to import all the constructs exported using the module. exports object from another module. If you have a module x in which you are exporting some constructs using the module.

- How do we bring another module into the file the we are working in?
 set your new function within the other file in your server program and set it equal to 'require'.

- What do we have to do to make a module available? make sure that you have export at the bottom of the file that you created.

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
