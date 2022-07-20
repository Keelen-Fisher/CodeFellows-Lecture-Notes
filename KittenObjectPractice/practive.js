'use strict';



// CREATING AN OBJECT 

// You are going to display:
// Kittens
// /figure out what info about each Kitten we need to show:
//  name
// age with a function - 3 months and 12 months 
//  interests 
// isGoodWithCats
// isGoodWithDogs
// isGoodWithKids
// phots

// DOM MANIPULATION STEP 1: WINDOW YOUR HTML TO JS

// ***********  WINDOW INTO THE DOM ************

let kittenSection = document.getElementById()
console.dir(kittenSection);

// ************ CONSTRUCTOR REFACTOR ***********
let kittenCaboodle = [];

function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids, photo){
  this.name = name;
  this.interests = interests;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithKids = isGoodWithKids;
  this.photo = photo;
  this.age = 0;

  kittenCaboodle.push(this);

}
// unique to each store - city, minCust, maxCust, avgCookie


// ************** PROTOTYPE METHODS *************

Kitten.prototype.getAge = function(){
  this.age = `${randomAge(3,12)} months`;
};




Kitten.prototype.render = function(){
  //  STEP 2: CREATE THE ELEMENT
  let articleElem = document.createElement('article')
  // STEP 3 - optional, give it context
  // STEP 4 - ADD IT TO THE HTML DOCUMENT 
  // parent.appendChild(child to append);
  kittenSection.appendChild(articleElem);

  // create h2 element - post the kitten's name
  let h2Elem = document.createElement('h2');
  // context - kitten's name 

  h2Elem.textContent = this.name; 
  articleElem.appendChild(h2Elem);

  let pElem = document.createElement('p');
  pElem.textContent = `${this.name} is ${this.age}`;
  articleElem.appendChild(pElem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i = 0; i< this.interests.length; i++){
    let liElem = createElement('li');
    liElem.textContent = this.interests[i];
    ulElem.appendChild(liElem);
//  you can also do append(h2Elem, pElem, ulElem)
  };

  let imgElem = document.createElement('img');
  imgElem.src = this.photo;
  imgElem.alt = `${this.name} is ${this.age}`;
  articleElem.appendChild(imgElem);
  
  // ************ TABLE DOM RENDERING *************
  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // Now we need the rows <tr></tr>:
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);
  let th1Elem = document.createElement('th');
  th1Elem.textContent = 'Good With Cats!';
  row1.appendChild(th1Elem);


  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Good With Dogs!';
  row1.appendChild(th2Elem);


  let th3Elem = document.createElement('th');
  th1Elem.textContent = 'Good With Kids!';
  row1.appendChild(th3Elem);

  
}


//  **************** Create Kittens with my Constructor********************

let frankie = new Kitten('Frankie', ['wet food', 'fish toy', 'cat nip'],
true, true, true, 'img/frankie.jpeg');

let jumper = new Kitten('Jumper', ['dry food', 'mouse toy', 'treats'],
true, false, false, 'img/jumper.jpeg');


frankie.getAge();
frankie.render();
jumper.getAge();
jumper.render();
// and so forth, OR:

function renderKittens(){
  for(let i = 0; i < kittenCaboodle.length; i++){
    let currentKitten = kittenCaboodle[i];
    currentKitten.getAge();
    currentKitten.render();
  }
}
//  *********** OBJECT LITERALS*****************

// 
let frankie = {
  name: 'Frankie', 
  age: 0,
  interests: ['wet food', 'fish toy', 'cat nip'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frnakie.jpeg',
  get: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  //  have the kitty render itself to the html - DOM MANIPULATION PT 2
  render: function(){
    //  STEP 2: CREATE THE ELEMENT
    let articleElem = document.createElement('article')
    // STEP 3 - optional, give it context
    // STEP 4 - ADD IT TO THE HTML DOCUMENT 
    // parent.appendChild(child to append);
    kittenSection.appendChild(articleElem);

    // create h2 element - post the kitten's name
    let h2Elem = document.createElement('h2');
    // context - kitten's name 

    h2Elem.textContent = this.name; 
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    pElem.textContent = `${this.name} is ${this.age}`;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i< this.interests.length; i++){
      let liElem = createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
//  you can also do append(h2Elem, pElem, ulElem)
    }

    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is ${this.age}`;
    articleElem.appendChild(imgElem);
    
  }
};
frankie.getAge();
frankie.render
console.log(frankie);

// grabbed from MDN Docs
function randomAge(min,max){
  // We are going to insert a return statement of a math random, you can pull this from a website by looking up math.random javascript
  return Math.floor(Math.random() * (max - min + 1) + min);
}





//  for lab 06:
// let seattle = {}