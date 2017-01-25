
function printContact() {

    var div = document.createElement('DIV');
    div.classList = 'contact';

    var inputName = document.createElement('INPUT');
    inputName.setAttribute('type', 'text');
    inputName.placeholder = 'Name';
    inputName.classList = 'name';

    var inputSurname = document.createElement('INPUT');
    inputSurname.setAttribute('type', 'text');
    inputSurname.placeholder = 'Surname';
    inputSurname.classList = 'surname';

    var inputPhone = document.createElement('INPUT');
    inputPhone.setAttribute('type', 'text');
    inputPhone.placeholder = 'Phone';
    inputPhone.classList = 'phone';

    var img = document.createElement('IMG');
    img.src = 'img/m.png';
    img.classList = 'gender';

    var removeSpan = document.createElement('SPAN');
    removeSpan.classList = 'btnRemove';
    removeSpan.id = 'btnRemove';
    removeSpan.innerHTML = 'X';

    div.appendChild(img);
    div.appendChild(inputName);
    div.appendChild(inputSurname);
    div.appendChild(inputPhone);
    div.appendChild(removeSpan);


    removeSpan.addEventListener('click',appContacts.deleteContact);
    inputName.addEventListener('blur',appContacts.updateContact);
    inputSurname.addEventListener('blur',appContacts.updateContact);
    inputPhone.addEventListener('blur',appContacts.updateContact);
    img.addEventListener('click',appContacts.updateContact);
    
    document.getElementById('box').appendChild(div);
     
}

function loadValues(contactDOM,contactValues){
    contactDOM.getElementsByClassName('name')[0].value = contactValues.name;
    contactDOM.getElementsByClassName('surname')[0].value = contactValues.surname;
    contactDOM.getElementsByClassName('phone')[0].value = contactValues.tel;
    contactDOM.getElementsByClassName('gender')[0].src = 'img/' + contactValues.gender + '.png';
}


