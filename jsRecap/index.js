//objectMutation
const o = {
    a='a',
    b='b'
}

const o2 = o;
o.a='new value';

console.log(o); //note the o will be new value because we have passed it by value.

/*primitives vs objects
1.primitives are immutable 
2. objects are mutable and stored by reference
*/

//passing by value vs passing by reference
const arr = [];

arr.push('value');
arr.push('value 1');

console.log(arr);

//Don't cram much on diff array methods that u can invoke
//arr._proto_ to print the diff methods
thisIsHoisted(); //This will run even if the function is not decalred yet.

function thisIsHoisted(){
    console.log('this function is at the bottom of the page');
}

thisIsnotHoisted(); //this will bring an error because its called before function declaration
//This is not hoisted
const thisIsnotHoisted = function(){
    console.log('This cant be used or called unless called after this')
}

thisIsnotHoisted(); //this will run well because its after a function declaration

//The global Object
//window is a global object any variable that u declare opens into global
function greeting() {
    console.log("Hi!");
}

 window.greeting(); // It is the same as the normal invoking: greeting();

//Closures
//refer to variables declared by parent function.
