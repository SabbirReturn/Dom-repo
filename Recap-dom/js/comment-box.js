document.getElementById('submit-btn').addEventListener('click',function(){
    let textField  = document.getElementById('text-field');
    let text = textField.value
    let commentSection = document.getElementById('comment-section');
    let p = document.createElement('p');
    p.innerText = text;
    commentSection.appendChild(p);
    textField.value = '';
})