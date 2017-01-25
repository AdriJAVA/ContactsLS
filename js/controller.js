var appContacts = (function(){
    
    var myList = new List('myContacts');

    var contactsDOM = document.getElementById('box').children;

    //Public methods
    var addContact = function (){
        var newContact = new Contact();    
        myList.add(newContact);
        printContact();
        console.table(myList.contacts);
    }
   
    var deleteContact = function(){

       for(let i = 0; i < contactsDOM.length; i++){
             if(contactsDOM[i] === this.parentNode){
                myList.contacts.splice(i,1);
             }
        }

       this.parentNode.remove();
       console.table(myList.contacts);
    }

    
    var updateContact = function(){
        var type =  this.className;
        switch(type){
            case 'name':
               _editName(this);
               break;
            case 'surname':
               _editSurname(this);
               break;

            case 'phone':
               _editTelephone(this);
               break;
            
            case 'gender':
               _editGender(this);
               break;
        }
        console.table(myList.contacts);
    }

    var searchContact = function(){
        
        var characters = this.value.toLowerCase();

        for(let i = 0; i < myList.contacts.length; i++){
            
            if(myList.contacts[i].name.toLowerCase().indexOf(characters) === -1){
                contactsDOM[i].style.display = 'none';
            }else{
                contactsDOM[i].style.display = 'block';
            }
        }   
    }

    var loadContacts = function(){
        var listStoraged = myLocalStorage.get();

        if(listStoraged){
            for(let i = 0; i <  listStoraged.contacts.length; i++){
                printContact();
                myList.add(listStoraged.contacts[i]);   
                loadValues(contactsDOM[i], listStoraged.contacts[i]);    
                 }
            }
    }

    var saveContacts = function(){
        myLocalStorage.save(myList);
    }

    //Private methods
    var _editName = function(_this){
         var namesDOM = document.getElementsByClassName('name');
         for(let i = 0; i < namesDOM.length; i++){
             if(namesDOM[i] === _this){
                myList.contacts[i].setName(_this.value);
             }
        }
    }

    var _editSurname = function(_this){
         var surnamesDOM = document.getElementsByClassName('surname');
         for(let i = 0; i < surnamesDOM.length; i++){
             if(surnamesDOM[i] === _this){
                myList.contacts[i].setSurname(_this.value);
             }
        }
    }

    var _editTelephone = function(_this){
         var telsDOM = document.getElementsByClassName('phone');
         for(let i = 0; i < telsDOM.length; i++){
             if(telsDOM[i] === _this){
                myList.contacts[i].setTel(_this.value);
             }
        }
    }

    var _editGender= function(_this){
        var gender = _this.src.replace(/^.*[\\\/]/, '').substring(0,1);

        if(gender === 'm'){
            _this.src = 'img/f.png';
            gender = 'f';
        }else{
            _this.src = 'img/m.png';
            gender = 'm';
        }
        var gendersDOM = document.getElementsByClassName('gender');
         
         for(let i = 0; i < gendersDOM.length; i++){
             if(gendersDOM[i] === _this){
                myList.contacts[i].setGender(gender);
             }
        }

    }    

    return{
        addContact    : addContact,
        deleteContact : deleteContact,
        updateContact : updateContact,
        searchContact : searchContact,
        saveContacts  : saveContacts,
        loadContacts  : loadContacts
       
    }

})();


document.getElementById('add').addEventListener('click', appContacts.addContact);
document.getElementById('search').addEventListener('keyup', appContacts.searchContact);
document.getElementById('save').addEventListener('click', appContacts.saveContacts);
document.getElementById('bin').addEventListener('click', myLocalStorage.clear);
window.onload = appContacts.loadContacts;