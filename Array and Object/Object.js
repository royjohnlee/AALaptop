/*
// ===============
// === Objects ===
// ===============

// assigning Key-Value pair
let testObject = { };  // creating an empty object
testObject["num"] = 10 // setting "num" as the KEY and 10 as the VALUE of num
testObject.num2 = 20 // setting num2 as the KEY and 10 as the VALUE

console.log(testObject) // prints: { num: 10, num2: 20 }
console.log(testObject[0]) // prints: undefined >>> because we did not assign any value to this key
*/

//=====================================================================//


/*
// ## Both .Dot Notation and []Bracket Notation will allow you to set AND access keys in an object
    // ## but []Bracket Notation will allow you to use variables as keys when setting a key.
        // ## This means you don't have to use strings as keys when using Braket Notation
let obj = {};
let string = "apples";

obj[string] = "yay!";

console.log(obj)
*/

//=====================================================================//

/*

// ===========================
// === ARRAY DESTRUCTURING ===
// ===========================
// 1. Destructuring Elements in Order

let array = ["blue", "red", "yellow", "green", "pink"]

//let firstColor = array[0] // old way
//let secondColor = array[1] // old way

let [firstDestructure, secondDestructure, thirdDestructure] = array;

console.log(firstDestructure) // prints: red
console.log(secondDestructure) // prints: blue
console.log(thirdDestructure) // prints: yellow
*/


/*
// ============================
// === Object DESTRUCTURING ===
// ============================
// 1. Destructuring Keys
// 2. Aliased Destructuring
// 3. Nested Destructuring

// 1. Destructuring Keys
let obj = {name: "Sandy", instruments: ["guitar", "drums"] };

let {name, instruments} = obj // Destructuring syntax

console.log (name) // prints: "Sandy"
console.log(instruments) // prints: ['guitar', 'drums'] 

//========================================================================//

// 2. Alias destructuring : put the value that the key is associated with TO A NEW variable

let obj2 = {name2: "Randy", instruments2: ["guitar", "drums"] };

let {name2, instruments2: music} = obj2 // instruments2 will now have the variable music
    // *note that this is still destructing; just assigning instruments2(key) to the variable music


console.log (name2) // prints: "Sandy"
console.log(music) // prints: ['guitar', 'drums'] 

//========================================================================//

// 3. Nested Destructuring

let zooAnimals = {
    animalID: 12,
    species: "hippo",
    favoriteFood: "watermelon",
    fullName: {
        fname: "Fiona",
        lname: "TheCuteHippo"
    }
};

let {fullName: {fname}} = zooAnimals 
// ## BREAK DOWN: go into the "fullName" Key and find the value(fname,lname)
    // ## once you're in there, grab the what you want (fname)
    // ## Then, have all that equal to the outter object name (zooAnimals)

// Another Nested Destructuring example:

let house = {
    numberOfRooms: 3,
    place:{
        city: "La Habra",
        state: "California",
        zip: 90631
    },
    numberOfMembers: 3,
    color: "white",
    neighbor1:{
        n1firstName: "Adam",
        n1lastName: "Dang"
    } ,
    neighbor2:{
        n2firstName: "Fred",
        n2middleName: "Derf",
        n2lastName: "Sohn"
    },
    owner:{
        firstName:"Roy",
        lastName:"Lee"
    }
};

// Access the owner's first name, 
    //neighbor1's first name and last name, 
    //neighbor3's first, middle, and last name, 
    //and set Key of place to a Variable.


let {owner:{firstName}} = house
console.log(firstName) // prints: Roy

let {neighbor1:{n1firstName, n1lastName}} = house  
console.log(n1firstName,n1lastName) // prints: Adam Dang

let {neighbor2:{n2firstName, n2middleName, n2lastName}} = house 
console.log(n2firstName,n2middleName, n2lastName) // prints: Fred Derf Sohn

let {place: location} = house // setting a key: place to a variable: location
console.log(location) // prints: { city: 'La Habra', state: 'California', zip: 90631 }


//====================================================================//
// 1. Destructuring in Function Parameters

let parrot = {name: "Layla", likes: "eat", numberOfToys: 1000}

let sayHelloName = ({name}) => {  // let sayHelloName = ({key}) => {...} 
    console.log("Hello to " + name)
}

sayHelloName(parrot) // sayHelloName(Object variable)
// prints: Hello to Layla


//=================================================================================================

*/

// =============================
// === Object Key-Value Pair ===
// =============================

// // here "color" is the key!
// car["color"] = "Blue";
// //"Blue"

// car["seats"] = 2;
// //2

// // accessing our object at the key of color
// car["color"]
// "Blue"

// car["seats"]
// //2

// console.log(car)


// ======================
// === Object Literal ===
// ======================

// let user = {
//     name: "crystal", //
//     age: 30,
//     email: "crystal@thenetninja.co.uk",
//     location: "Berlin",
//     blogs: [{ blogTitle1: "Big Hands, Big Heart" },
//     { blogTitle2: "When a Heart Breaks, it doesn't break even" },
//     { blogTitle3: "Hip, Hip Hooray!" }]
// };
// console.log(user)
// console.log(user.name); // accessing a properties WITHIN the object `user`


// console.log(user["name"]) // accessing a properties

// user.age = 35 // overwriting the value
// console.log(user.age) // prints 35 cause we overwrote it

// const key = "location"; // same as:
// console.log(user[key]) //  user["location"]


// ///////////////////////////////////////////////////
// salespeople = [
//     { name: "Susan", largestSale: 3000 }, // 500
//     { name: "Brianna", largestSale: 20000 }, //2000
//     { name: "Dwayne", largestSale: 13000 }, // 500
//     { name: "Delilah", largestSale: 26000 }, // 2600
//     { name: "Fernando", largestSale: 8000 }, // 500
// ];



// function salesCommission(salespeople) {
//     let counter = 0

//     salespeople.forEach(element => {
//         if (element.largestSale >= 15000) {
//             counter += element.largestSale * .10
//         } else { counter += 500 }
//     });

//     return counter
// }

// console.log(salesCommission(salespeople)); // 6100



console.log(undefined > 3)
