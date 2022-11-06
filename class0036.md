# Application State with Redux

## Dan Abramov Redux Tutorials [READ](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

- Redux provides a solid, stable, and mature solution to managing state in your React application. Through a handful of small, useful patterns, Redux can transform your application from a total mess of confusing and scattered state, into a delightfully organized, easy to understand modern JavaScript powerhouse.

- What is the first principle of Redux?

All mutations and changes to the state are explicit. Whether an application is a simple one, or a complex application with plenty of UI, you are going to represent the whole state of your application as a single JS object.

- what is a store and what do we use our reducers for within that store?

Store is a source that can bring together state, the actions, and reducers within the application.

- Name three Redux store methods given to us by createStore and describe their use.

  - `getState()`: Returns the current state tree of your application. It is equal to the last value returned by the store's reducer.

  - `dispatch(action)`:  Dispatches an action. This is the only way to trigger a state change. The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

  - `subscribe(listener)`: Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.

- Explain to a non-technical recruiter what combineReducers() does and why it is useful.

By implementing `combineReducers()`, this method can provide a top level reducer for you, which you can avoid having to write more code than necessary. These combined reducer can be further accessed using dot notation.

## Additional Questions

- Looking ahead at this module’s course schedule, What do you look forward to learning?

I Look forward to using redux for a well-built UI application of my own.

- What are your learning goals after reading and reviewing the class README?

I would like to learn more about the three redux store methods and how they are used in written code.

I would also like to learn more about the benefits of using `combineReducers()`.

[Home](https://keelen-fisher.github.io/new-repository/)
