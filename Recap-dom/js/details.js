document.getElementById('submit-btn').addEventListener('click',function(){
    let textFirst = document.getElementById('text-first');
    let firstNameText = textFirst.value
    
    let textLast = document.getElementById('text-last');
    let lastNameText = textLast.value

    // let phoneNum = document.getElementById('phoneNumber');
    // let num = parseFloat(phoneNum.value);
    // console.log(num);
    




    let detailsContainer = document.getElementById('details-container');
    let h11 = document.createElement('h1');
    h11.innerText = firstNameText;
    detailsContainer.appendChild(h11);

    let h12 = document.createElement('h1');
    h12.innerText = lastNameText;
    detailsContainer.appendChild(h12);

    textFirst.value = '';
})

document.getElementById('text-first').addEventListener('keyup',function(event){
    let text = event.target.value;
    let btn = document.getElementById('submit-btn');
    if(text === 'Sabbir'){
        btn.removeAttribute('disabled')
    }
    else{
        btn.setAttribute('disabled', true);
    }
})