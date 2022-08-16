# State and Props

## React: Component Lifecycle Events

- What are component lifecycle events? React lets you define components as classes or functions. The methods that you are able to use on these are called lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states.

- Based off the diagram, the render comes before the render.

- ![React](Images/React%20Lifestyle%20Event.png)

- When an instance of a component is being created and inserted into the DOM it occurs during the mounting phase. Constructor, static getDerivedStateFromProps, render, componentDidMount, and UNSAFE_componentWillMount all occur in this order during mounting.

- The very first thing is mounting.

- Anytime a component is updated or state changes then it is rerendered. These lifecycle events happen during updating in this order. Static getDerivedStateFromProps, shouldComponentUpdate, render,
getSnapshotBeforeUpdate, componentDidUpdate, UNSAFE_componentWillUpdate, UNSAFE_componentWillReceiveProps

- The componentWillUnmount() method is invoked immediately after a component is mounted. If you need to load anything using a network request or initialize the DOM, it should go here.

## React State Vs Props

- Counter applications within, such as the initial count or if you want to store in titles, images and alt text are types of passing through props.

- Props handles outstide of the component whereas states are inside of the component and can be updated.

- You re-render when you change the state inside of the component.

- Some examples of things that we could store in state could be Inside of a form, where you have values in options.

## Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)