document.getElementById('delete-btn').addEventListener('click',function(){
    let infoField = document.getElementById('info');
    infoField.style.display = 'none'
    let text = document.getElementById('text-field');
    text.value = '';

})
document.getElementById('text-field').addEventListener('keyup',function(event){
let text = event.target.value
let btn = document.getElementById('delete-btn');
if(text ==='delete'){
    btn.removeAttribute('disabled')
}
else{
    btn.setAttribute('disabled',true)
}
event.value = '';
})