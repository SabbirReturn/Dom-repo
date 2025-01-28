let clickBtn = document.getElementById('clickMe');
let change = document.getElementById('title')
clickBtn.onclick = function (){
    document.body.style.backgroundColor = 'Yellow'
    change.innerText = 'No change'
}