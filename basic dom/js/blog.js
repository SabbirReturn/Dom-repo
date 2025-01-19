// console.log("hello");

// let main = document.getElementById(main-container);

// let section = document.createElement('section');

// section.innerHTML =`
//     <p>Hey</P>
// `
// main.appendChild(section);


let main = document.getElementById('main-container');
let section = document.createElement('section');
section.innerHTML = `
    <p>hey</p>
`
main.appendChild(section);

const mainContainer = document.getElementById('main-container');
const section2 = document.createElement('section');
section2.innerHTML = `
    <h1>My Name is Sabbir Hasan</h1>
    <ul>
        <li>List item-1</li>
        <li>List item-2</li>
        <li>List item-3</li>
        <li>List item-4</li>
    </ul>
`
mainContainer.appendChild(section2);
let h1 = document.createElement('h1');
h1.innerText = ' My Name is Sabbir Hasan';
section.appendChild(h1);

let p = document.createElement('p');
p.innerText = ' I am a frontend Developer '
section.appendChild(p)

let ul = document.createElement('ul');
section.appendChild(ul);

let li1 = document.createElement('li');
li1.innerText = 'Html';
ul.appendChild(li1);
let li2 = document.createElement('li');
li2.innerText = 'CSS';
ul.appendChild(li2);
let li3 = document.createElement('li');
li3.innerText = 'JS';
ul.appendChild(li3);
let li4 = document.createElement('li');
li4.innerText = 'JS-Dom';
ul.appendChild(li4);
let li5 = document.createElement('li');
li5.innerText = 'React';
ul.appendChild(li5);
main.appendChild(section);


let h1Collections = document.getElementsByClassName('section-title');
for(let h1Collection of h1Collections){
    h1Collection.innerText
    console.log(h1Collection)
}
