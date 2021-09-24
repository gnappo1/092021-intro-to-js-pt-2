
// ARRAYS
let students = ["Matteo", "Corinna", "Cernan"]
// let array  = new Array("Matteo", "Corinna")
// constructor, instanceof, typeof, Array.isArray()
// ARRAY METHODS 
// How many args? What does it return? What does it do?
// Destructive VS Non-Destructive

// Extracting something from arrays
// If you know the position aka index -> remember we start counting from 0
students[0], students[-1]
// Adding elements destructively to an array
// At the end
sudents.push("Graham")
//At the beginning
sudents.unshift("Graham")
// Removing elements destructively from an array
// From the end
sudents.pop()
//From the beginning
sudents.shift()
// From an index
students.splice(1, 2)
// Adding Non-Destructively with ...
// Adding to the end
let newArray = [...students, "New Name"]
// Adding to the beginning
let newArray2 = ["New Name", ...students]
// Removing Non-Destructively with slice
students.slice(0)
students.slice(-1)
students.slice(0, 2)

// Iterator methods
// Simply iterate through each element and do something with it -> forEach
students.forEach(function (student) {
    console.log(student.toUpperCase())
})
// Create a new array with hand-picked elements -> map
students.map(function (student) {
    return student.toUpperCase()
})
// Find the first match based on a condition
students.find(function (student) {
    return student.startsWith("C")
})
// Filter elements out of the arrays based on a condition -> filter
students.filter(function (student) {
    return student.startsWith("C")
})
// Reduce a list of elements to a single final value (ex: sum or multiply a list of values) -> Reduce
students.reduce(function (acc, student) {
    return acc + student.length
}, 0)


// OBJECTS

let dog = {
    name: "Fido"
}

let person = {
    name: "Matteo",
    age: 29,
    interests: ["vb", "coding"],
    nameHobby: function(a) {
        return a
    }
}

// console.log(person.nameHobby)
// console.log(person["nameHobby"])

// Object Methods
// Entries
person.entries()
// Values
person.values()
// Keys
person.keys()
// Freeze
person.freeze()
// Assign
let objCopy = Object.assign(person, {})
let objCopy = Object.assign(person, {}, {extraKey: 99})
// CONDITIONALS

    // IF/ELSE IF/ELSE
        if (false) {
            console.log("You'll never see me!")
        } else if (num === 2) {
            console.log("Num is 2")
        } else {
            console.log("Num is whatever")
        }

    // TERNARY
        num == 4 ?  true : false


    //SWITCH
        switch(num) {
            case 1:
                console.log("Num is 1");
            case 4:
                console.log("Num is 4");
                break
            default:
                console.log("Num is none of the options above");
        }

// LOOPS
    // Worth mentioning are the keywords break and continue
    // FOR -> a predecided amount of iterations to do
        for(let i = 10; i > 0; i--) {
            console.log(i)
        }
    // FOR OF
        let ducks = ["Qui, Quo, Qua"]
        for (let duck of ducks) {
            console.log(duck)
        }
    // FOR IN
        let ducks = ["Qui, Quo, Qua"]
        for (let duck in ducks) {
            console.log(duck)
        }
    // WHILE
        while(num > 0) {
            console.log(num)
            num--
        }
    // DO WHILE
        do {
            console.log(num)
            num--  
        } while (num > 0)
