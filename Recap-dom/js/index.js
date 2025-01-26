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


let fruitTitle = document.getElementById('fruit-title');
fruitTitle.setAttribute('title','I like this type od Food');
console.log(fruitTitle);
fruitTitle.style.backgroundColor = 'yellow'









