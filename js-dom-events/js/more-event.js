document.getElementById('text-input').addEventListener('focus', function(){
    console.log('text');
})
document.getElementById('text-input').addEventListener('blur', function(){
    console.log('blur');
})
document.getElementById('text-input').addEventListener('mousemove', function(){
    console.log('mouse');
})
document.getElementById('text-input').addEventListener('keyup', function(event){
    console.log(event.target.value);

})