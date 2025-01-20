document.getElementById('update-btn').addEventListener('click',function(){
    let textField = document.getElementById('input-text')
    let inputText = textField.value

    let text = document.getElementById('text-display');
    text.innerText = inputText;
    textField.value ='';
})