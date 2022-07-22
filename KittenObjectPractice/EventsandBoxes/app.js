// FORM EVENTS DEMO

// STEP 1 - GRAB the element I want to listen to 
let myForm = document.getElementById('my-form');



// STEP 3 - DEFINE our callback function or event handler 

function handleSubmit(event){
  event.preventDefault();
  let name = name.target.firstName.value;

  console.log(name);

  // use parseInt for lab 09 in code 201
  let age = +event.target.age.value;
  console.log(age);
  console.log(typeof age);

}


// STEP 2 - ATTACH my event listener
myForm.addEventListener('submit', handleSubmit);