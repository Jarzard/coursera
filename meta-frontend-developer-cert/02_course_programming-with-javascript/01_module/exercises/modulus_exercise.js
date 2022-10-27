var testNumbers = [2,3,6,8,10];

// Output to check if the numbers in the array above are even numbers
for (let i = 0; i < testNumbers.length; i++) {
    var testNum = testNumbers[i]%2 == 0
    console.log("Is",testNumbers[i],"an even number?",testNum);
}

