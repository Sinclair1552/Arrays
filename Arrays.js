 // Setting or changing elements in an array pg. 43
 var colors = [
    "Red Rose",
    "Green Leaf",
    "Blue Gal",
    "Purple Nurple"
];
console.log(colors[0]);
console.log(colors);
console.log(colors[0] = "Red Room");
console.log(colors);
console.log(colors[7] = "Yellow Mellow");
console.log(colors);

// Mixing data types in an array pg. 45
var cheeseburgersAndNumbers = [5, "bacon", ["egg", "avocado", 2900], 7];
console.log(cheeseburgersAndNumbers[2]);
console.log(cheeseburgersAndNumbers[2, 1]);
console.log(cheeseburgersAndNumbers[2][1]);

// Find length of an array pg. 46
var candy = ["chocolate bar", "sour gummies", "lollipop"]
console.log(candy[2]);
console.log(candy.length);
console.log(candy[candy.length - 2]);

//Adding elements to an array pg. 47
var food = [];
console.log(food.push("Salad"));
console.log(food.push("Steak"));
console.log(food.push("Breadsticks"));
console.log(food);
console.log(food.length);

//Removing elements to an array pg. 49
var lastFoodItem = food.pop()
console.log("Crikey", lastFoodItem);

//Remove and Return the first element of an array pg.50
var firstFoodItem = food.shift();
console.log(firstFoodItem);
console.log(food);
console.log(food.unshift("Lobster"));
console.log(food);

//Adding arrays pg. 50
var petsIHaveHad = ["Lizard", "Toads", "Guinea Pig"];
var petsTHasHad = ["Bird", "Dog", "Turtle", "Cat"];
var petsWeBothHaveHad = [petsIHaveHad.concat(petsTHasHad)];
console.log(petsWeBothHaveHad);

//Finding the index of an alement in an array
var colors = ["red", "green", "blue"];
console.log(colors.indexOf("blue"));
console.log(colors.indexOf("green"));

//Finding an index of an array pg.52
var clothes = ["shirt", "pants", "socks"];
console.log(clothes.indexOf("pants"));
console.log(clothes.indexOf("skirt"));
var animals = ["sloth", "beardie", "sloth", "toads", "guinea-pigs", "sloth"];
console.log(animals.indexOf("sloth"));

//Turning an array into a string pg. 54
var friends = ["Thomas", "Alberta", "Amani"];
console.log(friends.join());
console.log(friends.join("touch"));

//Building the array with push pg. 55
var landmarks = [];
console.log(landmarks.push("My house"));
console.log(landmarks.push("Front path"));
console.log(landmarks.push("Flickering streetlamp"));
console.log(landmarks.push("Leaky fire hydrant"));
console.log(landmarks.push("Fire station"));
console.log(landmarks.push("Cat rescue center"));
console.log(landmarks.push("My old school"));
console.log(landmarks.push("My friend's house"));

//Going in reverse with pop pg. 55
console.log(landmarks.pop());

//Using Math.random pg. 57
console.log(Math.random());
console.log(Math.random() * 10);

//Rounding down with Math.floor
console.log(Math.floor(3.7463463));

//Creating a random index
Math.floor(Math.random() * 4);

var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndex]);
console.log(randomWords[Math.floor(Math.random() * 4)])

//Challenges:
//First Challenge: Make your own random insult generator
var randomClothes = ["shirt", "pants", "dress"];
var randomAdjectives = ["smelly", "dirty", "wrinkled"];
var randomWords = ["slob", "tent", "fruit", "pig"];
var randomClothing = randomClothes[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 4)];
var randomInsult = "Your " + randomClothing + " is " + randomAdjective + ", and you look like a " + randomWord + "."
console.log(randomInsult);

//Second challenge: More sophisticated insults
var randomClothes = ["shirt", "pants", "dress"];
var randomAdjectives = ["weird", "round", "wrinkled"];
var randomWords = ["slob", "tent", "fruit", "pig"];
var randomGross = ["slimy", "smelly", "sloppy", "unkept"]
var randomClothing = randomClothes[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 4)];
var randomGrossStuff = randomGross[Math.floor(Math.random() * 4)];
var randomInsult = "Your " + randomClothing + " is " + randomAdjective + ", and makes you look like a " + randomGrossStuff + " " + randomWord + "."
console.log(randomInsult);

//Third challenge: Joining numbers
/* How could you turn the array [3, 2, 1] into the string "3 is
bigger than 2 is bigger than 1" using the join method? */
var oldArray = [3, 2, 1];
var newArray = oldArray[0] + " is bigger than " + oldArray[1] + " is bigger than " + oldArray[2] + ".";
console.log(newArray);