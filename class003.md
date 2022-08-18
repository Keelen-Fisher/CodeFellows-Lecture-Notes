# Passing Functions as Props

## React Docs - lists and keys

- In the example provided in the website: [list element](https://reactjs.org/docs/lists-and-keys.html) the .map() return the <li> element for each item. So essentially it will return a new array with its data implemented through the parameter in the function.

- Use the forEach() method to iterate over the array. Declare an empty array that will store the JSX elements. On each iteration, push the JSX for the object into the array.

- Each list item needs a unique key/ ID.

- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

## The Spread Operator

- The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.

- List 4 things that the spread operator can do:
  - Copying an array
  -  Concatenating or combining arrays
  - Using Math functions
  - Using an array as arguments
  - Adding an item to a list
  - Adding to state in React
  - Combining objects
  - Converting NodeList to an array

- Example of combination of two arrays using the spread operator: ![operator](Images/Spread%20Operator%20used%20to%20merge%20two%20arrays.png)

- Example of using the spread operator to add a new item to an array: ![new item](Images/Adding%20a%20new%20item%20in%20array%20using%20spread.png)

- Example of using the spread operator to combine two objects into one: ![object](Images/Combine%20two%20objects%20into%20one%20using%20spread.png)

## How to Pass Functions Between Components

- The first step that a developer does to pass functions between components is to create a function in order to pass in the object within the parameter.

- In your own words, what does the increment function do? The increment function is going to serve as a way to grab the specific object within array produced, then create a loop that can use the object to establish a conditional statement that ensure that the object is true to our request, if so, the count that is connected to the object will increment the value.

- How can you pass a method from a parent component into a child component? ***Will need to come back to this question, I am not sure.*** *From my research, you would need to insert the child's class name as "Child.(function call)*

- How does the child component invoke a method that was passed to it from a parent component? you can set the name of the function equal to this.[name of function] also, by doing this.props.[name of function] within the invoke call parameter, you can grab the object from the original by this.props.[name of object]

## Things I want to Know About

- Parent and child components, I'm still very confused about its relationship between them.

[Home](https://keelen-fisher.github.io/new-repository/)
