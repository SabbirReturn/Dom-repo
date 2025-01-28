let clickBtn = document.getElementById('clickMe');
let change = document.getElementById('title')
clickBtn.onclick = function (){
    document.body.style.backgroundColor = 'Yellow'
    change.innerText = 'No change'
}

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
    change.innerText = 'Dom er ajke special Day'
} 

clickBtn.style.borderRadius = '10px'
