// option1
// direct use onclick in button
let line = document.getElementById('title');
line.setAttribute('title','hey I am sabbir Hasan')

// option2
function makeYellow(){
    document.body.style.backgroundColor='Yellow';
}

// option3
let makePurple = document.getElementById('make-purple');
makePurple.onclick = makePurpleBtn;

function makePurpleBtn(){
    document.body.style.backgroundColor='purple';
}
// option4
let makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = function blueBtn(){
    document.body.style.backgroundColor='blue';
}