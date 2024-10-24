---
sidebar_position: 1
---

# Functional Array Methods

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. JavaScript is a multi-paradigm language that supports functional programming. In this lesson, we'll explore some of the most common functional array methods in JavaScript.

## What are Functional Array Methods?

Functional array methods are higher-order functions that operate on arrays and return new arrays. They are used to transform, filter, and reduce arrays in a functional programming style. These methods are powerful tools for working with arrays in JavaScript.

Functional array methods are preferred in functional programming because they do not mutate the original array. Instead, they return new data (usually another array) with the desired changes. This makes it easier to reason about the behavior of the code and avoid bugs caused by side effects.

## Common Functional Array Methods

Here are some of the most common functional array methods in JavaScript:

- `map()`: Transforms each element of an array using a callback function.
- `filter()`: Filters an array based on a condition specified by a callback function.
- `reduce()`: Reduces an array to a single value using a callback function.

These methods are essential building blocks for working with arrays in a functional programming style. Let's explore each of them in more detail.

### `map()`

The `map()` method transforms each element of an array using a callback function and returns a new array with the transformed elements. The original array remains unchanged.

Here's an example of using the `map()` method to double each element of an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example, the `map()` method applies the callback function `(number) => number * 2` to each element of the `numbers` array, resulting in a new array `doubledNumbers` with the transformed elements.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P4RAFdZDn3M?si=h6s4rUO1Il-NOajv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### `filter()`

The `filter()` method filters an array based on a condition specified by a callback function and returns a new array with the elements that satisfy the condition. The original array remains unchanged.

Here's an example of using the `filter()` method to filter even numbers from an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(
  (number) =>
    /**
     * The true/false test condition here is whether the number is even.
     * If we divide the number by 2 and get something 'false' (i.e., 0), then the number is even.
     */
    !(number % 2)
);

console.log(evenNumbers); // Output: [2, 4]
```

In this example, the `filter()` method applies the callback function `(number) => number % 2 === 0` to each element of the `numbers` array, resulting in a new array `evenNumbers` with the elements that satisfy the condition (i.e., even numbers).

### `reduce()`

The `reduce()` method reduces an array to a single value using a callback function and an optional initial value. It iterates over the elements of the array, applying the callback function to each element and accumulating the result.

Here's an example of using the `reduce()` method to sum the elements of an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum); // Output: 15
```

In this example, the `reduce()` method applies the callback function `(accumulator, number) => accumulator + number` to each element of the `numbers` array, starting with an initial value of `0`. The result is the sum of all elements in the array.
