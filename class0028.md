# Component Lifecycle / `useEffect()` Hook

## [effects hook](https://reactjs.org/docs/hooks-effect.html)

- What purpose does useEffect serve in a function component compared to its counterpart(s) in class components?

The Effect Hook lets you perform side effects in function components

- When using the useEffect Hook:
  - What does useEffect do?

  By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

  - Why is useEffect called inside a component?

  Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

  - Why is useEffect called inside a component?

  Yes By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

- Explain the importance of properly implementing effects with Cleanup

 it is important to clean up so that we don’t introduce a memory leak

### Reflection

- What are your learning goals after reading and reviewing the class README?

What `useEffect()` looks like in a fully created react append how does this interact between other components?

[Home](https://keelen-fisher.github.io/new-repository/)
