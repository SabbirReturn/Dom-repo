document.getElementById('submit-btn').addEventListener('click', function(){
    let textField = document.getElementById('text-field');
    let text = textField.value 

    let mainContent = document.getElementById('main-container');
    let p = document.createElement('p');
    p.innerText = text;
    mainContent.appendChild(p);
    textField.value = '';
})

document.getElementById('text-field').addEventListener('keyup',function(){
    let textField = document.getElementById('text-field');
    let text = textField.value;
    let btn = document.getElementById('submit-btn')
    if(text ==='sabbir'){
        btn.removeAttribute('disabled')
    }
    else(
        btn.setAttribute('disabled' ,true)
    )
})