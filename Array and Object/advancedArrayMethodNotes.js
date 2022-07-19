/*
//===============
//=== forEach ===
//===============


let pixarFilms = [
    "Toy Story",
    "A Bug's Life",
    "Monsters, Inc",
    "Finding Nemo",
    "The Incredibles"
]
for (let i = 0; i<pixarFilms.length; i++){
 console.log(i,pixarFilms[i])
}

pixarFilms.forEach(function (element, index, array) {
    console.log(element.toUpperCase())
})


// ==================
// === Map Method ===    iterate and TRANSFORM from start to end
//===================

let pixarFilms = [
    "Toy Story",
    "A Bug's Life",
    "Monsters, Inc",
    "Finding Nemo",
    "The Incredibles"
]

let newArr = []
console.log(pixarFilms)
console.log(newArr)
for (let i = 0; i < pixarFilms.length; i++) {
    newArr.push(pixarFilms[i].toUpperCase())
}
console.log(pixarFilms)
console.log(newArr)

let newArr2 = pixarFilms.map(function (element, index, array)){
    return element.toUpperCase()
}
function myCallback(element, index, array) {
    return
}


================
==== Reduce ====
================


let pixarFilms = ["Toy Story",
    "A Bug's Life",
    "Monsters, Inc",
    "Finding Nemo",
    "The Incredibles"]

let lastValue = pixarFilms.reduce(function (previousValue, currentValue) {
    console.log("previous", previousValue)
    console.log("current", currentValue)
    console.log("=====================")

    return previousValue + " | " + currentValue
})

console.log("Last Value", lastValue)
*/
