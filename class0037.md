# Redux - Combined Reducers

## Multiple Reducers Example [WATCH](https://www.youtube.com/watch?v=gBER4Or86hE)

- Why create multiple reducers?

Because an application most commonly has more than one piece of data for its values.

- How would you combine multiple reducers?

First you can import combine reducers from redux, create multiple reducers, and with its proper arguments then callback that combineReducers with an object.

- How will you manage state as an immutable object? why?

By returning a new state.

## Redux Docs: Using Combined Reducers [READ](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)

- combineReducers is a utility function to simplify the most common use case when writing ***Redux reducers*** .

- Explain how combineReducers assembles the new state tree.

 In order to assemble the new state tree, `combineReducers` will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using `combineReducers` does "call all reducers", or at least all of the slice reducers it is wrapping.

- How would you define initial state in an app using combineReducers?

  - Essentially there are 2 ways:

    - First, the `createStore` function can take `preloadedState` as its second argument.
    - is for the root reducer to return the initial state value when the state argument is `undefined`.

  - These two approaches are described in more detail in Initializing State, but there are some additional concerns to be aware of when using `combineReducers`.

## Redux Docs: Combined Reducer Syntax [READ](https://redux.js.org/api/combinereducers/)

- Why will you want to split your reducing functions as your app becomes more complex?

Because each managing independent parts of the state.

- The `combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to `createStore`.

- What is a popular convention when naming reducers?

After sliced state.

## Reflection

- What are your learning goals after reading and reviewing the class README?

I would like to learn more about how to combine multiple reducers using `combineReducers`, and the practicality of returning a new state when trying to manage state if it is an immutable object.

[Home](https://keelen-fisher.github.io/new-repository/)
