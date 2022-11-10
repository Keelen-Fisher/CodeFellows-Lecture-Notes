# Redux - Additional Topics

## Redux Toolkit (RTK) [READ](https://redux-toolkit.js.org/introduction/getting-started)

- What concerns are addressed by Redux Toolkit?

  - "Configuring a Redux store is too complicated"
  - "I have to add a lot of packages to get Redux to do anything useful"
  - "Redux requires too much boilerplate code"

- What does `configureStore()` do?

It wraps `createStore` to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes `redux-thunk` by default, and enables use of the Redux DevTools Extension.

- How would I use createSlice()?

It accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

## MobX [READ](https://mobx.js.org/getting-started.html)

- What is Mobx?

A simple, scalable and battle tested state management solution.

- How does MobX make it “impossible” to produce an inconsistent state?

Data needs to be normalized, and thus MobX makes state management simple again by addressing the root issue

- How would we build a reactive user interface?

By using an observer pattern

## Tutorial [READ](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)

- What take-away(s) did this tutorial provide?

  - Redux from the Ground Up
    - Since Redux Toolkit is an abstraction layer that wraps around the Redux core, it's helpful to know what RTK's APIs are actually doing for you under the hood.

  - Real-World Example
    - It shows how to build a "real world"-style example application, and teaches Redux concepts along the way

[Home](https://keelen-fisher.github.io/new-repository/)
