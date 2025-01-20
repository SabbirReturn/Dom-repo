function makeYellow(){
    document.body.style.backgroundColor='Yellow'
}

let makeBlue = document.getElementById('make-Blue');
makeBlue.onclick = blue;
function blue(){
    document.body.style.backgroundColor='Blue'
}

let makePurple = document.getElementById('make-purple');
makePurple.onclick = function purple(){
    document.body.style.backgroundColor='purple'
}

let makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', makeGreen);

function makeGreen(){
    document.body.style.backgroundColor='Green'
}
let makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', function(){
    document.body.style.backgroundColor='Pink'
})

document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'Goldenrod'
})