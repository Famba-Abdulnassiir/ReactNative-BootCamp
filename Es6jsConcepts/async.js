//javascript has some functoins that work asynchronously

function printOne(){
   console.log('one');
}

function printTwo(){
    console.log('two');
}

function printThree(){
    console.log('three');
}






setTimeout(printOne, 1000);
setTimeout(printTwo, 0);
printThree();

//Execution Stack
//function invoked by other functions get added to the call stack
/*When functions complete, they are removed from the stack and the 
frame continues executing*/

function addOne(num){
    num + 1;
}

function getNum(){
    return addOne(10);
}

function c(){
    console.log(getNum() + getNum());
}

c();