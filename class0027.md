# Reading: `useState()` Hook

## Introducing Hooks [READ](https://reactjs.org/docs/hooks-intro.html#motivation)

- Hooks solve a wide variety of seemingly unconnected problems in React. It is a function and allows you to hook into 

- Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data). Rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

- Hooks allow you to reuse stateful logic without changing ***your component hierarchy***.

## hooks api [READ](https://reactjs.org/docs/hooks-overview.html)

- Name two rules imposed by React Hook usage.

  - Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
  
  - Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

- Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.

## the state hook [READ](https://reactjs.org/docs/hooks-state.html)

- What is a Hook?

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

- useState is a Hook that lets you add React state to function components.

- If you were to add React state to a function component by declaring a state variable:
  
- ***What does calling useState do?*** It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

- ***What do we pass to useState as an argument?*** The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

- ***What does useState return?*** It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.

## Reflection

- What are your learning goals after reading and reviewing the class README

I want to understand more about Hooks api and its relationship between functions and components.

I would also like to learn about useState().

[Home](https://keelen-fisher.github.io/new-repository/)
