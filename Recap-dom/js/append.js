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