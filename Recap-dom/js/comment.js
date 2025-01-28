document.getElementById('Submit-btn').addEventListener('click',function(){
    let textField = document.getElementById('text-field');
    let text = textField.value
    let commentBox = document.getElementById('comment-box');
    let p = document.createElement('p');
    p.innerText = text;
    commentBox.appendChild(p);
    textField.value = '';
})
