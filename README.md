# AGENDA

## JS Fudamentals Pt. 2

### Conditionals

Conditionals in Javascript can have three different constructs:

```js
  if(1 == 1) {
    console.log("1 is equal to 1");
  } else if(1 == 2) {
    console.log("1 is equal to 2");
  } else {
    console.log("1 is not equal to 1 and 1 is not equal to 2");
  }
```

ternary expressions:

```js
return 1 == 1 ? "1 is equal to 1" : "1 is not equal to 1";
```

case statements:

```js
  let num = 1

  switch(num) {
    case 1:
      console.log('the num is 1');
      return "I will break!";
    default:
      console.log('the num is not 1');
  }
```

Notice here that I am using break to break out of the switch statements. Without break it would run the logic of every case statement, break will break out of it. If you use return, you don't have to use break.

### Arrays

Arrays are super similiar to ruby, with the exception that we can alter them or do non-destructive functions with them to give back a new array.

#### Destructive vs Non Destructive

Descructive in javascript means to change the value of. A method is clled destructive if it permanently modifies the original object.

Destructive Array Methods:

```js
  let array = ["hello"]
  let newArray = [0,1,2,3,4,5]

  array.push("world") // adds to end of array, ["hello", "world"]

  array.unshift("First Element") // adds to front of array ["First Element", "hello", "world"]

  array.pop() // removes from end of array ["First Element", "hello"]

  array.shift() // removes from front of array ["hello"]

  newArray.splice(1, 4) // removes elements starting at the 1 index, and 4 elements, [0, 5] is now newArray
```

Non-Destructive Array Methods:

```js
  // We use the ... or spread operator in order to copy and paste elements of an existing array into a "new" array

  let array = ['hello']
  let array2 = [...array, 'world']
  let array3 = ['world', ...array]
  // array is still ['hello']
  // array2 is ['hello', 'world']
  // array3 is ['world', 'hello']

  let numberList = [0,1,2,3,4,5,6]

  // slice allows you to slice our a new array from an older array
  numberList.slice(1, 5) // returns [1,2,3,4,5]
  numberList // is still [0,1,2,3,4,5,6]
```

### Iteration

Iterators loop over a specific collection of elements, and therefore know where to start and stop.

ForEach

```js

let array = ["Bob", "Sarah"]

array.forEach(function(element) {
  console.log(element)
})

// this would print out Bob first and then Sarah. forEach takes in a callback function and will pass each element in to the callback function. Much like we did in ruby when it was yielded into a block with do |element|.
```

Map

```js
let array = ["Bob", "Sarah"]

array.map(function(element) {
  return element + "!";
})

// this would return a new array with ["Bob!", "Sarah!"]. Also take note that the return keyword is being used. You must return the value you wish to be in the modified array.
```

Filter

```js
let array = ["Bob", "Sarah"]

array.filter(function(element) {
  if(element.includes("a")) {
    return element;
  }
})

// this would give us back a new array and the result would be ["Sarah"] because Sarah has an "a" included in the name.
```

### Objects

```js
  let howard = {
    name: "Howard",
    age: 21, /* for the record, no idea how old Howard is, probably 21 */
    profession: "Expert in the ways of Dad Jokes"
  }
```

One added thing that javascript objects have that other languages like ruby don't, are function definition values.

```js
  let howard = {
    name: "Howard",
    age: 21, /* for the record, no idea how old Howard is, probably 21 */
    profession: "Expert in the ways of Dad Jokes",
    description: function() {
      console.log(`Hello my name is ${this.name}, i am ${this.age} years old, and my profession is ${this.profession}`)
    }
  }

  howard.description() // logs Hello my name is Howard, i am 21 years old, and my profession is Expert in the ways of Dad Jokes
```