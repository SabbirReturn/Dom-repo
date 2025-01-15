let liCollection = document.querySelectorAll('.fruits-container li');
for(let li of liCollection){
    console.log(li.innerText)
}
let liCollections = document.querySelectorAll('#fruits-item li')
for( let li of liCollections){
    li.innerText = 'tometo'

}