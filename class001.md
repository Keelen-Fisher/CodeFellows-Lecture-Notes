# Introduction to React and Components

## Component-Based Architecture

- A component is a molecular, portable, replaceable, and reusable set of well-defined functionality that encapsulated its implementation and exporting it as a higher-level interface. For a software component, this can be defined as a unit of composition with a contractually specified interface and conforms to a recommended behavior common to all components within an architecture.

- A component can be viewed in three different views:

  - ***Object-oriented view***: can be seen as a set of one or more cooperating classes. Each problem domain class (analysis) and infrastructure class are explaining to identify all attributes and operations that apply to it implementation. It also involves defining the interfaces that enable classes to communicate and cooperate.

  - ***Conventional View***: Can be seen as a functional element or a module of a program that integrates the processing logic, the internal data structures that are required to implement the processing logic and an interface that enables the component to be invoked and data to be passed to it.

  - ***Process-related View***: Instead of created each component from scratch, the system is building from existing components maintained in a library. As the software architecture is formulated, components are selected from the library and used to populate the architecture.

- The Characteristics of Componenets:

  - **Resuability**: Components are usually designed to be reused in different situations in different applications. However, some components may be designed for a specific task.
  - **Replaceable**: Components may be freely substituted with other similar components.
  - **Not Context Specific**: Components are designed to operate in different environments and contexts.
  - **Extensible**:  A component can be extended from existing components to provide new behavior.
  - **Encapsulated**:  A A component depicts the interfaces, which allow the caller to use its functionality, and do not expose details of the internal processes or any internal variables or state.
  - **Independent**: Components are designed to have minimal dependencies on other components.

- What are the advantages of using component-based architecture?

- Component-oriented software design has many advantages over traditional object-oriented approaches such as:

  - Reduced time in market and the development cost by reusing existing components.
  - Increased reliability with the reuse of the existing components.

## What is Props and How to Use it in React

- **"Props"** is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

- How to use props in React, step by step:

  - Step 1: Defining Attribute and Data. As already defined in Code 201, we know that we can assign attributes and values to HTML tags. This application can be used the same way for react components, only now you can assign values using interpolation{}/then declare a "text" attribute to the ChildComponent and then assign a string value. Meaning, the ChildComponent now has a property and a value.
    - example: ![html](Images/HTML%20tag%20example.png)
    - ![inter](Images/interpolation%20example.png)
    - ![first](Images/fitst%20child.png)

  - Step 2: Passing Data using Props. String and pass it by using props. This part is pretty simple. Similar to passing arguments to a function, we pass into a React component and props bring all the necessary data.
    - Example of arguments passed to a React component: ![arg](Images/Arguments%20to%20React%20.png)

  - Step 3: Render the Props Data using interpolation. If you were to console.log() props, it would return back an object. In JavaScript, we can access object elements with dot(.) notation. So, let’s render our text property with an interpolation.

- The important part is that data with props are being passed in a **uni-directional flow**. (One way from parent to child)

### Things I want to Know About

[Home](https://keelen-fisher.github.io/new-repository/)
