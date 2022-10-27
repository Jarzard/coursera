//create a function that adds two numbers
function addTwoNums(a,b){
    try {
        // check to see that the arguments passed are number datatypes
        // if it's not a number, throw an error message
        if(typeof a != "number"){
            throw ReferenceError("the first argument is not a number")
        } else if(typeof b != "number"){
            throw ReferenceError("The second argument is not a number")
        } else {
            console.log(a+b)
        }
    }
    catch(err){
        // log the error
        console.log("Error!",err)
    }
}

// invoke the function
addTwoNums(5,"5");

// log "It still works" to prove that the code still runs
console.log("It still works")