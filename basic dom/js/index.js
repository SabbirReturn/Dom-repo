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
    console.log(place.innerText);
}

let changeLine = document.getElementById('other-name');
console.log(changeLine.innerText)
changeLine.innerText = 'kushtia'

