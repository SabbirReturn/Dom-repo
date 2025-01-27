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
