document.getElementById('post-btn').addEventListener('click',function(){
    let textContainer = document.getElementById('textarea-container');
    let text = textContainer.value
    let commentContainer = document.getElementById('comment-container');
    let p = document.createElement('p');
    p.innerText = text;
    commentContainer.appendChild(p);
    textContainer.value = '';
})