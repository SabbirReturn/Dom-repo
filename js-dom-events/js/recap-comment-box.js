document.getElementById('postBtn').addEventListener('click', function(){
    let text = document.getElementById('text-field');
    let textInput = text.value
    let mainContainer = document.getElementById('main');
    let p = document.createElement('p');
    p.innerText = textInput;
    mainContainer.appendChild(p);
    text.value = '';
})