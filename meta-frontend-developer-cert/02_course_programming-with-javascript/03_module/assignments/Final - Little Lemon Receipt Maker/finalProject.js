// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        const dish = dishData[i];
        let finalPrice = "";
        if (taxBoolean == true) {
            finalPrice = dish.price * tax
        } else if (taxBoolean == false) {
            finalPrice = dish.price
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return
        }
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean);
    if (typeof guests === 'number' & guests > 0 & guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else {
            discount = 10;
        }
        console.log(`Discount is: $${discount}`);
    } else {
        console.log("The second argument must be a number between 0 and 30")
    }
}

// Call getDiscount()
// getDiscount(true, 2);
// getDiscount(false, 10);

console.log(result);
var result = 7;

var x = 0 != 1
console.log(x);

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}
;

var cat = {}
cat.sound = "meow"
var catSound = "purr"
console.log(cat.sound)