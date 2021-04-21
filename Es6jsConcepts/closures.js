// A closure is the combination of a function bundled together (enclosed) with references to
//  its surrounding state (the lexical environment). In other words, a closure gives you access
//   to an outer function’s scope from an inner function. In JavaScript, closures are created every
//  time a function is created, at function creation time

function makeHelloFunction(){

    const message = 'Hello';
    function sayHello(){
        console.log(message);
    }

    return sayHello;
}
const sayHello = makeHelloFunction();
sayHello();
