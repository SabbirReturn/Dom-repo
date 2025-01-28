document.getElementById('changeBtn').addEventListener('click',function(){
    let defaultText = document.getElementById('default-Text');
    defaultText.innerText = 'Hey'
})

document.getElementById('event-btn').addEventListener('click',function(){
    let finalChange = document.getElementById('final-Change');
    finalChange.style.backgroundColor = 'yellow'
})

document.getElementById('update-btn').addEventListener('click',function(){
    let textField = document.getElementById('text-field');
    let inputText = textField.value
    let text = document.getElementById('update-text');
    text.innerText = inputText;
    textField.value = '';
})