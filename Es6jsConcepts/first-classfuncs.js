/*One of the most dynamic features of JavaScript is that it has first-class functions, 
meaning that functions are treated like any other first-class object — they can be stored in variables, passed
 around, returned from other functions, and even hold their own properties. */

/**Allows creation of higher end functions
 * map(), filter(), reduce()
 * can be passes as an argument to another functions
 * can be returned form a function
 * can be assigned to variables, objects, arrays
 */

//Map
// const x = [0,1,2,3];
// function addOne(number){
//     return number + 1;
// }
// addOne(1);

// x.map;
// x.map(addOne);
// console.log(x);

function map(arr, fn) {
    const newArr = [];
    arr.forEach(function (val) {
        newArr.push(fn(val));
        
    })

    return newArr
        
};

function addOne(num) {
    return num + 1;
}
const x = [0,1,2,3];
console.log(map(x, addOne));