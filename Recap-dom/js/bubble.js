document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item 2 clicked')
    event.stopPropagation()
})
document.getElementById('list-item').addEventListener('click',function(){
    console.log('List item clicked')
})
document.getElementById('ul-click').addEventListener('click', function(){
    console.log('Ul clicked');
})