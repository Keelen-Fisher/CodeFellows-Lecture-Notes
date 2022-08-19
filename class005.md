# Putting it all Together

## Thinking in React

- The single-responsibility principle (SRP) is a computer programming principle that states that "A module should be responsible to one, and only one, actor."

- What does it mean to build a ‘static’ version of your application? To build a static version of your application is to have some what of a template built for all of your dynamic code from helper functions and constructors. You can use build components to reuse other components and pass data using props.

- To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: Don’t Repeat Yourself. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, take the length of the TODO items array.

- Once you have a static application, what do you need to add? If you make a change to your underlying data model and call root.render() again, the UI will be updated.

- What are the three questions you can ask to determine if something is state?
Is it passed in from a parent via props? If so, it probably isn’t state.
Does it remain unchanged over time? If so, it probably isn’t state.
Can you compute it based on any other state or props in your component? If so, it isn’t state.

- How can you identify where state needs to live?
For each piece of state in your application:

Identify every component that renders something based on that state.
Find a common owner component (a single component above all the components that need the state in the hierarchy).
Either the common owner or another component higher up in the hierarchy should own the state.
If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

## Higher-Order Functions

- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

- Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?
  function greaterThan(n) {
  return m => m > n;
}

Line 2 returns the m function to return m being less than n.

- Explain how either map or reduce operates, with regards to higher-order functions.

- Example of High Order with reduce/filter operation: ![High](Images/High%20Order%20using%20filter%20and%20map.png)

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
