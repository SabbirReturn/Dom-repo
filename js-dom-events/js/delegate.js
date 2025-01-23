document.getElementById('add-Btn').addEventListener('click', function(){
    let listContainer = document.getElementById('list-container')
    let li = document.createElement('li');
    li.innerText = 'Add more'
    
    listContainer.appendChild(li);
})

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})