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

let fruitTitle = document.getElementById('fruit-title');
fruitTitle.innerText = 'Change the Title by Js'