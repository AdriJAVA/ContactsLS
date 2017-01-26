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

        var index = _getIndex(contactsDOM,this.parentNode);
        myContacts.delete(index);
        this.parentNode.remove();
        console.table(myContacts.contacts);
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
         var index = _getIndex(namesDOM,_this);
         myContacts.contacts[index].setName(_this.value);
        }
        
    

    var _editSurname = function(_this){
         var surnamesDOM = document.getElementsByClassName('surname');
         var index = _getIndex(surnamesDOM,_this);
         myContacts.contacts[index].setSurname(_this.value);
        }
    

    var _editTelephone = function(_this){
         var telsDOM = document.getElementsByClassName('phone');
         var index = _getIndex(telsDOM,_this);
         myContacts.contacts[index].setTel(_this.value);
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
         var index = _getIndex(gendersDOM,_this);
         myContacts.contacts[index].setGender(gender);             
        }
        
    
    var _getIndex = function(nodeList,_this){
        return Array.prototype.indexOf.call(nodeList, _this);
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
