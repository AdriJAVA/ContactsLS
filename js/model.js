class Contact {
    constructor(name,surname,tel,gender){
        this.name = name || '';
        this.surname = surname || '';
        this.tel = tel || '';
        this.gender = gender || 'm';
    }
    
    setName(name){
        this.name = name;
    }

    setSurname(surname){
        this.surname = surname;
    }

    setTel(tel){
        this.tel = tel;
    }

    setGender(gender){
        this.gender = gender;
    }
}
    

class List {
    constructor(name){
        this.name = name;
        this.contacts = [];
    }
    
    add(contact){
        this.contacts.push(contact);
    }
    
    delete(i){
        this.contacts.splice(i,1);
    }

}

