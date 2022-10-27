function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >= 2;
    var condition2 = typeof(word) == "string" && match.length == 1;

    // if(condition1 == true && condition2 == true){ 
    if(condition1 && condition2) { // this is a shorter way of the above conditions
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}

letterFinder(2,3); // failing test
letterFinder("cat","c"); // passing test

;

var str = "Hello";
console.log(Number(5).toPrecision(300));