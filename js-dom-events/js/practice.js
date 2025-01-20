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