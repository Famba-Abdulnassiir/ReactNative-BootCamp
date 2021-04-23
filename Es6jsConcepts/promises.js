/* promises are like the promises in the daily life buh put the concept in js
   *Alleviate "callback hell"
   allows u to write code that assumes a value is returned with in a success function
   only needs a songle error handler */

//basic how promises work

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        return ({
            importantData: json.importantData
        })
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        //handle this error here
    })
