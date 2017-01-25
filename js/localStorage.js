var myLocalStorage = (function(){

    var save = function(contacts){
        
        localStorage.setItem('myList',JSON.stringify(contacts));
    }

    var get = function(){

         return JSON.parse(localStorage.getItem("myList"));
    }
    
    var clear = function(){
        localStorage.clear();
    }

    return{
        save: save,
        get: get,
        clear: clear
    }
})();