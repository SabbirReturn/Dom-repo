// let items = document.getElementsByClassName('item');
// for(let item of items){
//     item.addEventListener('click',function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('add-btn').addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = 'Add more item';
    li.classList.add('item')
    let container = document.getElementById('list-container');
    container.appendChild(li);
})
