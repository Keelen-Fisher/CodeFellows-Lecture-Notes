# Context API - Behaviors

## Hooks and Context example [READ](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

- With regard to the React Context API, what does a “provider” do?

. The Provider component accepts a value prop to be passed to consuming components that are descendants. Since any React component in a React Redux app can be connected to the store, most applications will render a `<Provider>` at the top level, with the entire app's component tree inside of it.

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including `.contextType` and `useContext`) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

- Specifically with Context, how are we “wrapping” components to achieve our goals?

The wrapped component receives all the props of the container, along with a new prop, data , which it uses to render its output.

## Awesome React Context links [LINK](https://github.com/diegohaz/awesome-react-context)

Consume content from (at least) two more of the Awesome React Context links. After some familiarity with React Context, once again share your takeaways from each:

- Takeaway 1:

Learning about toggle theme from [LINK](https://codesandbox.io/s/n4r0qq898)

- Takeaway 2:

Learning about unstated from [LINK](https://github.com/jamiebuilds/unstated)

## Reflection

- What are your learning goals after reading and reviewing the class README?

[Home](https://keelen-fisher.github.io/new-repository/)
