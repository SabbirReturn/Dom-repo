console.log(document);
let licollection = document.getElementsByTagName('li');
for( let li of licollection){
    // console.log(li.innerText);
}

let hiCollection = document.getElementsByTagName('h1');
for(let hi of hiCollection){
    // console.log(hi.innerText);
}
// let line = document.getElementsByClassName('tour-title').innerText
// console.log(line)
let line = document.getElementById('tour-title')
line.innerText = 'Tour list'

let places = document.getElementsByClassName('place-name');
for(let place of places){
    // console.log(place.innerText);
}

let changePlaces = document.getElementsByClassName('other-name');
for( let changePlace of changePlaces){
    changePlace.innerText = 'kushtia'

}

let someLi = document.querySelectorAll('.name li')
for(let li of someLi){
    // console.log(li.innerText);
}
let li = document.querySelector('.name li');
// console.log(li.innerText)

//  let change =document.getElementById('tour-title').style.color 
//  change = 'yellow';
//  console.log(change);
document.getElementById('tour-title').style.color = 'blue'
document.getElementById('tour-title').style.textAlign = 'center'
let title = document.getElementById('tour-place');
title.getAttribute('id');
console.log(title)



