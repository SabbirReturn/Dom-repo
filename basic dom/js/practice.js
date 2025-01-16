let tag = document.getElementsByTagName('h1');
// console.log(tag);
let header = document.getElementById('header-title');
header.innerText = 'welcome to my blog'
// console.log(header.innerText)

// let items = document.getElementsByClassName('food-item');
// for(let item of items){
//     // item.innerText = 'banan'
    
// }

// let items = document.querySelectorAll('.food-item li')
// for( let item of items){
//     item.innerText = 'tomato'
//     console.log(item.innerText)
// }

let overlap = document.getElementById('header-title');
overlap.setAttribute('title','welcome to our website')



let mainContainer = document.getElementById('main-container');

let section = document.createElement('section')

let h1 = document.createElement('h1');
h1.innerText = 'Tour place'
section.appendChild(h1);
h1.style.textAlign = 'center'

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'coxs bajar'
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'Ranggamati'
ul.appendChild(li2)

let li3 = document.createElement('li');
li3.innerText = 'Kushtia';
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section)
console.log(mainContainer)

let dress = document.createElement('section');
section.innerHTML = `
    <h1>My dress section</h1>
<ul>
    <li>Pant</li>
    <li>Shirt</li>
    <li>T-shirt</li>
    <li>Half Pant</li>
</ul>
`
mainContainer.appendChild(dress);

let sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px solid red'
    section.style.marginBottom = '2px';
    section.style.padding = '5px'
    section.style.backgroundColor = 'blue'
    section.style.color = 'white';

}


