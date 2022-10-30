# Context API

## Context API [READ](https://reactjs.org/docs/context.html)

- What can React Context provide your app?

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

- Why might we use Context?

Using context, we can avoid passing props through intermediate elements.

- Why should we use it sparingly?

Since context is primarily used when some data needs to be accessible by many components at different nesting levels, we should apply it sparingly because it makes component reuse more difficult.

## Awesome React Context links [VIEW](https://github.com/diegohaz/awesome-react-context)

- Consume content from (at least) two of the Awesome React Context links. Share your take-away from each:

  - Takeaway 1:
  
   [From Link:](https://egghead.io/lessons/react-creating-providers-and-consumers-with-the-react-context-api) We can use `<ProfileDetails>`, Which is part of profile Wrapper, to pass props accordingly as properties for easier accessibility to acquire what you are passing.

  - Takeaway 2: createRef API [FROM THIS LINK:](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

"Previously, React provided two ways of managing refs: the legacy string ref API and the callback API. Although the string ref API was the more convenient of the two, it had several downsides and so our official recommendation was to use the callback form instead."

"Version 16.3 adds a new option for managing refs that offers the convenience of a string ref without any of the downsides":

    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        this.inputRef = React.createRef();
      }

      render() {
        return <input type="text" ref={this.inputRef} />;
      }

      componentDidMount() {
        this.inputRef.current.focus();
      }
    }

## Additional Questions

What are your learning goals after reading and reviewing the class README?

Learn more about "Providers" and "Nested Levels".
