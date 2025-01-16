let p = document.createElement('p');
p.innerText = 'My name is Sabbir Hasan'

let addContent = document.getElementById('place-container')
let content = addContent.appendChild(p);

let mainContainer = document.getElementById('main-container')
// Create a section
let section = document.createElement('section');

// create a h1
let h1 = document.createElement('h1');
h1.innerText = 'My food list'
section.appendChild(h1)

// create a ul

let ul = document.createElement('ul');
let li1 = document.createElement('li')
li1.innerText = 'Biriany'
ul.appendChild(li1);

let li2 = document.createElement('li')
li2.innerText = 'Kacchi'
ul.appendChild(li2)

let li3 = document.createElement('li')
li3.innerText = 'Vuna Khichuri'
ul.appendChild(li3)


section.appendChild(ul)
mainContainer.appendChild(section)


// another way

let sectionDress = document.createElement('section');
section.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li>Pant</li>
    <li>Shirt</li>
    <li>T-shirt</li>
    <li>Half Pant</li>
</ul>
`

mainContainer.appendChild(sectionDress)