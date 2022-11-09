# Redux - Asynchronous Actions

## async actions [READ](https://redux.js.org/advanced/asyncactions)

- Why use Redux middleware?

Because it was designed to enable writing logic that has side effects.

- Consider the Redux Async Data Flow Diagram. Describe the flow in your own words.

Here, the UI initializes the user input which is then sent to the event handle, then, is sent to the middleware to be dispatched. The action gives a request to an API and then returned as a response. It is the processed through the reducer functionality and then processed through state, back to the UI.

- How are we accommodating async in our Redux app?

By implementing and user event then call the dispatch for passing.

## thunk middleware [READ](https://github.com/reduxjs/redux-thunk)

- Why would you need redux-thunk middleware?

Because it supports injecting a custom argument into the thunk middleware. This is typically useful for cases like using an API service layer that could be swapped out for a mock service in tests.

- Redux Thunk middleware allows you to write action creators that return a ***function***  instead of an action.

- Describe how any return value from the inner thunk function will be made available.

Any return value from the inner function will be available as the return value of dispatch itself.

[Home](https://keelen-fisher.github.io/new-repository/)
