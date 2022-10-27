var petDog = "Rex";
var petCat = "Pepper";
var dogSound = "woof";
var catSound = "purr";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: ",petDog);
console.log("My pet cat's name is: ",petCat);

console.log(petDog,"says",dogSound);
console.log(petCat,"says",catSound);

var catSound = "meow"; // this reassigns the catSound; the first declaration is no longer valid
console.log(petCat,"now says",catSound);