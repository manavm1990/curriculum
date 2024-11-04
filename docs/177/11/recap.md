---
sidebar_position: 0
---

# Recap

## JS Types and Methods Recap

Everything in JavaScript is an object except primitives like numbers, strings, booleans, `undefined`, and `null`. Even though primitives aren't objects, JavaScript lets you use them like objects by automatically boxing them when you call methods on them. All with the exception of `undefined` and `null`.

Recall that primitives are immutable. They can't be changed once they're created. When you try to change a primitive, JavaScript creates a new value instead of modifying the original one.

### Boxing Primitives

When you call a method on a primitive, JavaScript automatically boxes the primitive in an object wrapper, calls the method, and then discards the wrapper. This allows you to use methods on primitives as if they were objects.

```javascript
const name = "alice";
console.log(name.toUpperCase()); // "ALICE"
```

## References and Spreading Recap

In JavaScript, objects and arrays are reference types. When you assign an object or array to a variable, you're actually assigning a reference to the data, not the data itself. This means that if you modify the object or array through one reference, all other references to that data will reflect the changes.

In order to avoid modifying the original data when working with objects and arrays, you can use the spread operator (`...`) to create a new copy of the data. This way, you can modify the copy without affecting the original data.

### ⚠️ Nested Object References

When you use the spread operator to create a shallow copy of an object, nested objects are still copied by reference. This means that modifying a nested object in the copy will also modify the original object.

```javascript
const user = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA",
  },
};

const newUser = { ...user };
newUser.address.city = "San Francisco

console.log(user.address.city); // "San Francisco"
```

To avoid this, we can use the [`structuredClone` method](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) to create a deep copy of the object, which will copy all nested objects by value.

![Apply `structuredClone()` to `user` and `newUser` example.](/img/structured-clone.png)

**Note:** Ignore 🙈 the typo in the image.

## Pure Functions Recap

A pure function is a function that always returns the same output for the same input and has no side effects. This means that a pure function doesn't modify any external state or data outside of its scope.

Pure functions are predictable and easier to test because they don't rely on external data or produce side effects. They also help prevent bugs and make code easier to reason about.

## Array Methods Recap

JavaScript provides a variety of array methods that allow you to manipulate arrays in different ways. Some common array methods include:

- `map()`: Transforms each element in an array and returns a new array.
- `filter()`: Filters elements in an array based on a condition and returns a new array.

These methods are useful for working with arrays and can help you write more concise and readable code.

## Callbacks and Higher-Order Functions Recap

Callbacks are functions that are passed as arguments to other functions and executed after some operation has been completed. They are commonly used in asynchronous operations, event handling, and functional programming.

Higher-order functions are functions that take other functions as arguments or return functions as results. They are a key concept in functional programming and allow you to create more flexible and reusable code.
