let liCollection = document.querySelectorAll('.fruits-container li');
for(let li of liCollection){
    // console.log(li.innerText)
}
let liCollections = document.querySelectorAll('#fruits-item li')
for( let li of liCollections){
    li.innerText = 'tometo'
}

// let title = document.getElementById('fruit-title');
// title.style.color = 'blue';
// title.style.backgroundColor= 'yellow';
// title.style.textAlign = 'center';
// title.setAttribute('title', ' I like this type of food');

// let container = document.getElementsByClassName('fruits-container')[0];
// container.innerHTML = '<h1>Hey I like this</h1>'


let sections = document.querySelectorAll('section');
for( let section of sections){
    section.style.backgroundColor = 'lightGray';
    section.style.border = '2px solid red';

}

