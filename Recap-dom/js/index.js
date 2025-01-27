let allLi = document.getElementsByTagName('li')
for(let li of allLi){
    // console.log(li.innerText);
}

let allHeadings = document.getElementsByTagName('h1');
for( let heading of allHeadings){
    // console.log(heading.innerText);
}

let fruitsName = document.getElementsByClassName('fruits-name');
for(let fruit of fruitsName){
    // console.log(fruit.innerText);
}

// let fruitTitle = document.getElementById('fruit-title');
// fruitTitle.innerText = 'Change the Title by Js'

let someLi = document.querySelectorAll('#fruits-container li');
for(let li of someLi){
    // console.log(li.innerText);

}

let title = document.getElementById('fruits-container');
title.getAttribute('id');
title.getAttribute('class');
title.classList.remove('blue-bg');
title.classList.add('blue');
console.log(title);


// let fruitTitle = document.getElementById('fruit-title');
// fruitTitle.setAttribute('title','I like this type od Food');
// console.log(fruitTitle);
// fruitTitle.style.backgroundColor = 'yellow'

let sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.backgroundColor='yellow'
    section.style.marginBottom = '10px'
    section.style.padding = '10px';
    section.style.border = '2px solid red'
}
let fruitsColor = document.getElementById('fruits-container');
fruitsColor.classList.add('fruits')
fruitsColor.classList.add('large-text')
fruitsColor.classList.remove('fruits');

 let mainContainer = document.getElementById('main-container');

 let Section = document.createElement('section');
 let h1 = document.createElement('h1');
 h1.innerText = 'I like this type of food';
 Section.appendChild(h1);
let ul = document.createElement('ul');
Section.appendChild(ul);
let li = document.createElement('li');
li.innerText = 'fast food'
ul.appendChild(li);
 mainContainer.appendChild(Section);

let dressSection = document.createElement('section');
dressSection.innerHTML = `
    <h1>Favourite Dress</h1>
    <h1>Trail</h1>
    <ul>
        <li>Shirt</li>
        <li>Pant</li>
    </ul>
`
mainContainer.appendChild(dressSection)











