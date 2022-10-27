var age = 65;

if (age >= 65){
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

var day = "Sunday";

switch(day) {
    case "Monday":
        console.log("Chill");
        break;
    case "Tuesday":
        console.log("Chill");
        break;
    case "Wednesday":
        console.log("Chill");
        break;
    case "Thursday":
        console.log("Chill");
        break;
    case "Friday":
        console.log("Chill");
        break;
    case "Saturday":
        console.log("Chill");
        break;
    case "Sunday":
        console.log("Chill");
        break;
    default:
        console.log("There is no such day");
        break;
}