# Advanced State with Reducers

## useReducer hook [READ](https://reactjs.org/docs/hooks-reference.html#usereducer)

- Name an alternative to the `useState` Hook.

useReducer() Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

- Why might the `useReducer` Hook be preferable to the `useState` Hook?

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

- What are two ways to set the initial state?

You can pass the initial state as a second argument:

      const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
      );

You can also create the initial state lazily. To do this, you can pass an `init` function as the third argument. The initial state will be set to `init(initialArg)`.

## Ultimate Guide to useReducer [READ](https://blog.logrocket.com/guide-to-react-usereducer-hook/)

- In terms of state, what does `useReducer` expect to receive as a parameter?

      - useReducer(reducer, initialCount, init)

- What does `useReducer` return?

Returns the current state paired with a dispatch method.

- Explain `dispatch` to a non-technical recruiter.

dispatch is simply a function which dispatches an action to the Redux store after

## Reflection

- What are your learning goals after reading and reviewing the class README?

Learn more about redux and  the dispatch method that comes from the useReducer().

[Home](https://keelen-fisher.github.io/new-repository/)
