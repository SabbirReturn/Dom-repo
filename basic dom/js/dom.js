// let liCollection = document.querySelectorAll('.fruits-container li');
// for(let li of liCollection){
//     // console.log(li.innerText)
// }
// let liCollections = document.querySelectorAll('#fruits-item li')
// for( let li of liCollections){
//     li.innerText = 'tometo'
// }

// let title = document.getElementById('fruit-title');
// title.style.color = 'blue';
// title.style.backgroundColor= 'yellow';
// title.style.textAlign = 'center';
// title.setAttribute('title', ' I like this type of food');

// let container = document.getElementsByClassName('fruits-container')[0];
// container.innerHTML = '<h1>Hey I like this</h1>'


// let sections = document.querySelectorAll('section');
// for( let section of sections){
//     section.style.backgroundColor = 'lightGray';
//     section.style.border = '2px solid red';
//     section.style.marginBottom = '10px';
//     section.style.borderRadius = '10px';
//     section.style.padding = '10px';
// }
// let place = document.getElementById('place-container');
// place.style.backgroundColor = 'lightGreen'
// let placeContainer = document.getElementsByClassName('place-container');
// placeContainer.classList.add('bg-color');

// let fruitsContainer = document.getElementById('fruits-item');
// let child = fruitsContainer.childNodes[2];
// console.log(child);

let fruitsName = document.getElementById('fruits-item');
let fruit = fruitsName.childNodes[3].childNodes[5]
// console.log(fruit);

let fruitName = document.querySelector('#fruits-item ul')
console.log(fruitName);

let li = document.createElement('li');
li.innerText = 'Banana'

let addFruit= fruitName.appendChild(li)
console.log(addFruit)










