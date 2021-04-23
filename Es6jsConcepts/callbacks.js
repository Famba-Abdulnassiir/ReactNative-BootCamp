/*control flow with asynchronous calls 
Executes function once async call returns value
program doesnt halt and wait for a value. 

commonly used in the Fetch of Apis
func passed as an argument to another func.... this allows function to call another function
*/

function doSomethingAsync (callback){
    setTimeout(function() {callback(1)}, 1000);  
}

doSomethingAsync(console.log);

