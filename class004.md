# React and Forms

## React-Forms

- What is a ‘Controlled Component’?
In HTML, form elements such as `input`, `textarea`, and `select` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState(). There is a way to combine two of the previously mentioned by making the React state to be the "single source of truth". The React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

- It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library.

- Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
As the developer, you would need to update the state with their responses as soon as they enter them, because the user's response can only be recognized from the viewpoint of the previous initial state.

- In HTML, an `input type="file"` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API. Because its value is read-only, it is an uncontrolled component in React.

- How do we target what the user is entering if we have an event handler on an input field? ***Need to come back to this question***

## The Conditional (Ternary) Operator Explained

- Why would we use a ternary operator? This can establish a much more simpler way to develop lines of code that has more than a couple of operational statements:

- An example of a common if statement: ![reg](Images/Example%20of%20a%20if%20conditional%20statement%20without%20ternary%20.png)

- New version: ![ter](Images/Example%20of%20ternary%20code.png)

- Rewrite the following statement using a ternary statement:

if(x===y){
  console.log(true);
} else {
  console.log(false);
}

console.log() = x===y ? true : false;

## Things I want to Know About

- How to use ternary in bigger blocks of code and what is the proper order behind it.

[Home](https://keelen-fisher.github.io/new-repository/)
