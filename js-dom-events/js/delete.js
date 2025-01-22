document.getElementById('delete-btn').addEventListener('click', function(){
    let infoText = document.getElementById('info')
    infoText.style.display = 'none';

})

document.getElementById('input-field').addEventListener('keyup',function(event){
    let text = event.target.value
    let deleteBtn = document.getElementById('delete-btn');
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled',true)
    }
})