console.log(document);
let licollection = document.getElementsByTagName('li');
for( let li of licollection){
    console.log(li.innerText);
}

let hiCollection = document.getElementsByTagName('h1');
for(let hi of hiCollection){
    console.log(hi.innerText);
}
let line = document.getElementsByClassName('tour-title').innerText
console.log(line)