//Immediately Invoked funtions
//creates closures..... Doesnt add or modify global objects

const sayHello =(function (){

    var message = 'Hello';

function sayHello(){
    console.log(message);
}
return sayHello;
})();

sayHello();

//incase we dont want a value to be access globally but we want a counter
//that increaments a counter
const counter = (function(){
    let count = 0;

    return {
        inc: function(){ count = count +1},
        get: function(){ console.log(count)},
    }
})()

counter.get();
counter.inc();
counter.get();