---
sidebar_position: 0
---

# Recap: Collection Data Types and Functions

We took some big steps forward last week, looking at functions, loops, and objects.

**Everything in JS is an object, except primitives (and even some of those can behave as objects temporarily).**

To put it another way, JS makes it extremely simple to create and model things as objects. And once that has been done, it's easy to interact with those objects using methods and properties.

## Collection Data Types

### Arrays

Arrays are a way to store multiple values in a single variable. We can access these values using an index. Arrays are zero-indexed, meaning that the first element is at index `0`.

```javascript
const fruits = ["apple", "banana", "cherry"];
```

### Array Methods

Arrays have a number of built-in methods that allow us to manipulate the data they contain. Here are a few examples:

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

Most of the methods above involve changing the array in some way. However, `indexOf` and `slice` do not modify the original array. Generally, in functional programming and in React, we prefer to avoid modifying the original array.

### Looping Over Arrays

For now, we have seen that we can use `for` and/or `while` to ➿ over arrays. It's quaint and works for now. But, there are better ways to do this. We will look at those in the future.

```javascript
const groceryList = ["Apples", "Bananas", "TP", "Bars", "Wacon", "🥚s"];

// 'log' every item on the list...
for (let i = 0; i < groceryList.length; i++) {
  console.log(groceryList[i]);
}
```

## Functions

The main purpose of functions is to promote code reuse. They allow us to define a block of code that can be executed multiple times with different inputs. Functions can and should also return a value.

```javascript
function add2Nums(x, y) {
  return x + y;
}

// INVOKE/EXECUTE/RUN the function with the ARGUMENTS 200 and 300 - ARGUMENT 200 will be bound to 'x' while we are running 'add2Nums'
// Whatever data comes back, bind it to the variable 'sum'
const sum = add2Nums(200, 300);
```

Some general guiding principles for functions:

1. **Single Responsibility Principle**: A function should do one thing and do it well.
2. **Don't Repeat Yourself (DRY)**: If you find yourself writing the same code more than once, consider creating a function.
3. **Return Early**: If you can, return early from a function. This can help to avoid deeply nested `if` statements.
4. Name functions with verbs that describe what they do (e.g., `calculateTotal`, `fetchData`); unless they are **function components.**
5. Don't allow the function to be too long. If it's too long, it's probably doing too much.
6. Don't have the function reaching outside of its scope too much at all. The function should be self-contained. In other words, it should receive **arguments** to bind to its **parameters**, do its job within its enclosing braces and return a **value**.

### Good Function Practices

```javascript
// Good: Single Responsibility
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}

// Good: Descriptive Name, Returns Early
function isEvenNumber(num) {
  if (num % 2 === 0) return true;

  return false;
}

// Good: Doesn't reach outside its scope
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Usage
const tax = calculateTax(100, 0.1);
const isEven = isEvenNumber(4);
const fullName = getFullName("John", "Doe");
```

## Bad Function Practices

```javascript
// Bad: Does too much, not single responsibility
function processUserData(user) {
  console.log(user.name);
  user.age += 1;
  sendEmailToUser(user.email);
  updateDatabase(user);
}

// Bad: Unclear name, reaches outside its scope
let total = 0;
function doStuff(x) {
  total += x;
  return total;
}

// Usage
processUserData(someUser);
doStuff(5);
```
