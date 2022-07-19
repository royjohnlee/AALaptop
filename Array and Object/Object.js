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
