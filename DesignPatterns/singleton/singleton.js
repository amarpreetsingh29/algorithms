var service=(function(){
    "use strict";
    var instance;
    function service(){
        if(!instance){
            this.p1="p1";
            instance = this;
        }
        return instance;
    }
    service.prototype.m1=function(){
        console.log("hello")
    }
    return service;
})();

var s1= service();
var s2=new service();
console.log(s1 === s2); //true