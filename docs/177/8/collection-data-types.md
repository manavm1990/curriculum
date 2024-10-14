---
sidebar_position: 1
---

# Collection Data Types

Before proceeding, you may wish to review the [Data Types and References](/docs/177/6/data) lesson and/or watch the video below.

<div class="sp-embed-player" data-id="cZnZ3rVKIPv">
<script src="https://go.screenpal.com/player/appearance/cZnZ3rVKIPv"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZnZ3rVKIPv?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

These are also known as compound or composite data types. They are used to store multiple values in a single variable. Most commonly, these are in the form of objects and arrays. Again, more correctly, we mean object literals and array literals. We create them using curly braces `{}` and square brackets `[]`, respectively.

## Arrays

Arrays are ordered lists of values, which can be of any data type. Arrays are particularly useful for storing sequences of data, such as lists of items or results from a query. They provide a variety of methods for adding, removing, and manipulating elements, making them a powerful tool for managing collections of data.

```javascript
const fruits = ["apple", "banana", "cherry"];
```

Arrays are zero-indexed, meaning that the first element is at index `0`, the second element is at index `1`, and so on. We can access individual elements of an array using square brackets `[]` and the index of the element we want to retrieve, like `fruits[0]` to get the first fruit in the array.

One can think of an array as a column in a spreadsheet. ![grocery list in spreadsheet](/img/list.png)

### Array Methods

Whenever we create an array like we did above, we are actually creating an instance of the built-in `Array` object. In fact, the long way to create an array would be: `const fruits = new Array("apple", "banana", "cherry");`. But, that's not how we do it in practice.

Regardless, as `fruits` is an instance of an `Array`, we can use a variety of methods that are available to all arrays. Here are a few examples:

```javascript
// Add an element to the end of the array
fruits.push("date");

// Remove the last element from the array
fruits.pop();

// Add an element to the beginning of the array
fruits.unshift("apricot");

// Remove the first element from the array
fruits.shift();

// Find the index of a specific element
const index = fruits.indexOf("banana");

// Remove an element by index
fruits.splice(index, 1);

// Get a subset of the array
const subset = fruits.slice(1, 3);
```

## Looping ➿ Over Arrays

```javascript
const groceryList = ["Apples", "Bananas", "TP", "Bars", "Wacon", "🥚s"];
console.log(groceryList[0]); // Apples
console.log(groceryList[1]); // Bananas
console.log(groceryList[2]); // TP
console.log(groceryList[3]); // Bars
console.log(groceryList[4]); // Wacon
console.log(groceryList[5]); // 🥚s
```

```javascript
const groceryList = ["Apples", "Bananas", "TP", "Bars", "Wacon", "🥚s"];

// 'log' every item on the list...
/**
 * The first INDEX is...'0'
 * The last INDEX is...1 less than then length of the Array.
 * There are total items...the LENGTH is 6.
 * The last INDEX (🥚s) is...'5'
 *
 * If we write a 'for' that starts at '0' and stops at the LENGTH - 1...
 *
 * To get that LENGTH, we just have to access the name of that ARRAY and add a '.length' - 'groceryList.length'
 */
for (let i = 0; i < groceryList.length; i++) {
  // 'i' will ITERATE from '0' to '5', INCREMENTING by 1 each time...
  console.log(groceryList[i]);
}

// 'i' here is in the GLOBAL SCOPE - it has nothing to do with the 'i' mentioned in the 'for' 👆🏽
let i = 0;

while (i < groceryList.length) {
  console.log(groceryList[i]);
  i++;
}
```

## Object Literals

Object literals are collections of key-value pairs, where each key is a string (or symbol) and each value can be any data type, including other objects. This structure is highly flexible and is often used to represent more complex data entities, such as user profiles or configuration settings.

```javascript
const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
  friends: ["Bob", "Charlie", "David"],
};
```

Object properties can be accessed via **dot notation,** as we have already seen, such as `person.name`. We can also drill down into the object using multiple dots, like `person.address.city`. And, for this example, we can access the first friend in the `friends` array with `person.friends[0]`.

Heck, we could even write a function that selects a random friend from a person's `friends` array:

```javascript
function getRandomFriend(person) {
  return person.friends[Math.floor(Math.random() * person.friends.length)];
}
```

In the above example, we have compacted it into a single statement, but for clarity, we could also write it as:

```javascript
function getRandomFriend(person) {
  const randomIndex = Math.floor(Math.random() * person.friends.length);
  return person.friends[randomIndex];
}
```

### Bracket Notation for Objects

In addition to dot notation, we can also access object properties using bracket notation. This is useful when the property name is dynamic or when it contains special characters.

```javascript
const key = "name";
const value = person[key]; // Equivalent to person.name
```

In the example above, we are using the `key` variable to access the `name` property of the `person` object. This is equivalent to `person.name`, but it allows us to use a variable to specify the property name.

```javascript
/**
 * With JS Objects,
 * we don't HAVE TO put quotation marks around our keys because no matter what JS will expect those to be STRINGS.
 * With JSON (which is not JS), we MUST always put those quotation marks around each and every key.
 */
const myObj = {
  myString: "String",
  myNum: 23,
  myBoo: true,
  explanation:
    "We just make up our own STRING keys, and assign whatever value we want. All the while this is all wrapped up under 1 VARIABLE that REFERENCES this OBJECT LITERAL (literal just signifies that we made this OBJECT - it's not 'built in').",
  mackey: "It's easy to make OBJECTS, mmmkay?",
};

/**
 * This time, instead of using our usual DOT NOTATION,
 * let's use an alternative syntax - BRACKET NOTATION.
 *
 * Here, we use '[]',
 * but it's critical that we put quotation marks around the name of the key that we want to represent.
 */
console.log(myObj["myString"]);

// Dot notation
console.log(myObj.myNum); // 23
```

Summarily, once again, use bracket notation to access a value with a variable name. Use dot notation to access a value with an explicit value.

## Arrays vs. Object Literals

**Everything in JavaScript is an object, except primitives (and even some of those can behave as objects temporarily).**

We'll be reinforcing the above idea 💡 a few more times during this course. It certainly doesn't need to make total sense for right now.

For now, we have mentioned that we can create an array with the `new` keyword, but we don't do that. We use the array literal syntax. We can also create an object with the `new` keyword, but we don't do that either. We use the object literal syntax.

However, both arrays and objects...and just about everything else in JavaScript...are objects. They have properties and methods that we can use to interact with them. And, with that, we also have an idea of why we make it sometimes make it a point to say 'array literal' or 'object literal.' It's because we are creating an instance of an object, but we are doing it in a very specific way; namely 'on the fly' with `{}` or `[]`.

But to come back to the most applicable points, as long we understand that arrays are ordered lists of values, and object literals are collections of key-value pairs, we are in a good place.

![key-value pairs](/img/key-value.png)

![ordered list](/img/numbered-list.png)

Again, we access values inside of objects (object literals) using 'string 🔑s/indices' and we access values inside of arrays using 'numerical 🔑s/indices.'

Both of these collection types derive from the `Object` type in JavaScript, and arrays also derive from the `Array` type. This just means that, arrays especially, have access to some built-in **instance methods** that we can use to manipulate them.

### Object Methods

In addition to what we have already seen regarding dot notation and bracket notation, there are handful of 'top-level' methods that we can use with objects. Here are a few examples:

```javascript
// Get an array of the keys in the object
const keys = Object.keys(person);

// Get an array of the values in the object
const values = Object.values(person);

// Check if a property exists in the object
const hasAge = person.hasOwnProperty("age");
```

`keys` and `values` are **class methods.** Notice that we use them differs from the **instance method** example, `hasOwnProperty`. We use `Object.keys(person)` and `Object.values(person)` because they are **class methods** that are available on the `Object` class. We use `person.hasOwnProperty("age")` because it is an **instance method** that is available directly on the `person` object.

## `const` Does Not Mean Constant

As we have heard, `const` means that cannot reassign a new value to the variable. So, whenever we are working with primitive data types, this means that it's a constant. Once we say, `const name = "Mark"` we cannot change `name` to anything else. However, when we are working with collection data types, like arrays and objects, we can change the data inside of them. We just can't reassign the variable to a new array or object.

```javascript
const person = {
  name: "Alice",
  age: 30,
};

// This is fine
person.age = 31;

// This is not fine
person = {
  name: "Bob",
  age: 40,
};
```

Similarly, with arrays:

```javascript
const fruits = ["apple", "banana", "cherry"];

// This is fine
fruits.push("date");

// This is not fine
fruits = ["apricot", "blueberry", "cranberry"];
```

In the examples above, we are **mutating** the data inside the `person` object and the `fruits` array, but we are not reassigning the variable to a new object or array.

As it turns out, in modern functional programming, mutations are generally discouraged. In fact, in React, if mutate data in place, it can cause the UI to not update properly. This is why we will often use methods like `map`, `filter`, and `reduce` to create new data structures, rather than modifying existing ones. In the same vein, there's also something called the **spread operator** (`...`) that can be used to create new arrays and objects from existing ones.

```javascript
const fruits = ["apple", "banana", "cherry"];

// Create a new array with 'date' added to the end
const newFruits = [...fruits, "date"];
```

Nice 🍄. We avoided mutating `fruits`. We have a full record of `fruits` and `newFruits`.

For the time being, we will just mutate date in place, and in some circumstances, outside of React, this has its own advantages and propriety. But, as we move forward, we will learn more about the benefits of immutability.

## Summary

- Arrays are ordered lists of values, while object literals are collections of key-value pairs.
- Arrays are zero-indexed, and we can access elements using square brackets and the index.
- Object properties can be accessed using dot notation, and we can drill down into nested objects.
- `const` does not mean constant when working with collection data types; it means that we cannot reassign the variable to a new array or object, but we can mutate the data inside them.
- Mutations are generally discouraged in modern functional programming, and we will learn more about immutability as we progress.
- The spread operator (`...`) can be used to create new arrays and objects from existing ones, avoiding mutations.

---

**Note:** Some of the above images are taken from a FreeCodeCamp lesson the Fundamentals of Computer Science.
