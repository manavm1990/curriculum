---
sidebar_position: 2
---

# Functional vs Imperative Programming

In this lesson, we will explore the differences between functional and imperative programming. We will discuss the concepts of state, side effects, mutations, and mutable data. We will also compare functional and imperative programming styles and provide examples of each.

## State

In this lesson, you will hear the term, 'state.' State is nothing but the data that is stored in memory during the execution of a program. It is the current condition of a system or an object. In JavaScript, state can be stored in variables, objects, or arrays. In real applications, state can represent many things, such as the current user, the items in a shopping cart, or the state of a game.

You might think of it as, "The state of a part of an application." For example, the state of a shopping cart might include the items in the cart, the total price, and the number of items. The state of a game might include the player's score, the level they are on, and the time remaining. And, as the program progresses and the user does things, we will need to track and update this state.

## Side Effects

In functional programming, we aim to minimize side effects. A side effect is any change in the state of the program that is not directly related to the computation of the result. Side effects can include modifying variables, logging to the console, or making network requests. By minimizing side effects, we can make our code easier to understand, test, and maintain.

Another way to think about this is to see if a function is reaching outside of its scope to do anything. Does it depend on some external data or state? If so, it's not a pure function. Pure functions are functions that only depend on their input arguments and do not rely on any external state.

Many times, we do actually need impure functions. For example, we need to interact with the DOM to update the UI. But, we should strive
to keep these impure functions to a minimum. We might even choose to keep our pure, reusable function in a separate file for these functions, like `lib.js` or `utils.js`.

## Mutations and Mutable Data

In functional programming, we aim to avoid mutable data. Mutable data is data that can be changed after it is created. When data is mutable, it can be difficult to reason about the state of the program and track down bugs. By using immutable data structures, we can ensure that data does not change unexpectedly.

We have previously been exposed to some array methods like `push`, `pop`, `shift`, and `unshift`. These methods mutate the original array. In functional programming, we prefer to use methods that do not mutate the original data. Instead, they return a new array with the desired changes. Some examples of these methods are `map`, `filter`, and `reduce`.

## What is Functional Programming?

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means that the focus is on what the program should accomplish rather than how it should accomplish it.

Functional programming is based on the following principles:

- Functions are first-class citizens: Functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
- Functions are pure: A pure function is a function that, given the same input, will always return the same output and has no side effects.
- Avoid shared state: Functional programming avoids shared state, mutable data, and side effects.
- Avoid mutable data: Functional programming emphasizes the use of immutable data structures and avoids changing data in place.

## Imperative Programming

Imperative programming is a programming paradigm that uses statements to change a program's state. It focuses on describing how a program operates. This paradigm is characterized by the use of loops, conditionals, and mutable state.

Imperative programming is based on the following principles:

- Sequence of commands: Programs are composed of a sequence of commands for the computer to perform.
- Mutable state: Variables can be updated with new values.
- Control structures: Uses loops and conditionals to control the flow of the program.
- Side effects: Functions and procedures can have side effects that modify the state of the program.

## Examples

### Functional Programming Example

Functional programming emphasizes the use of pure functions, immutability, and higher-order functions. Here's an example of summing an array of numbers using functional programming in JavaScript:

```javascript
// Functional Programming Example
const numbers = [1, 2, 3, 4, 5];

/**
 * Pure function that adds two numbers.
 * It doesn't care about anything outside of its scope.
 * Given the same values for `a` and `b`, it will always return the same result.
 */
const add = (a, b) => a + b;

/**
 * We pass `add` as a callback function to `reduce`.
 * `reduce` applies the callback function to each element of the array (from left to right),
 * resulting in a single output value...
 * ...thereby reducing or distilling the array down to a single value.
 *
 * The second argument to `reduce` is the initial value of the accumulator.
 * This accumulator is the running total of the sum of the array elements, starting at 0.
 */
const sum = numbers.reduce(add, 0);

console.log(sum); // Output: 15
```

### Imperative Programming Example

Imperative programming focuses on describing how a program operates using statements that change a program's state. Here's an example of summing an array of numbers using imperative programming in JavaScript:

```javascript
// Imperative Programming Example
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// Using a for loop to sum the array
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // Output: 15
```

### Key Differences

- **State Management**: Functional programming avoids changing state and mutable data, whereas imperative programming often involves updating variables (notice the use of `let` in the imperative example).
- **Code Style**: Functional programming uses expressions and higher-order functions like `reduce`, while imperative programming uses statements and control structures like loops ➿.
- **Side Effects**: Functional programming aims to minimize side effects by using pure functions, whereas imperative programming may have functions that modify the state or have other side effects. The imperative example above doesn't actually even consolidate any code into functions!

When starting to learn how to write code, we begin with an imperative style, as many would argue that it's easier to follow and read. However, as you become more comfortable with JavaScript, you may find that functional programming can lead to more concise and expressive code. And, a functional approach can be mandated in some codebases, especially in the context of React and state management libraries.

By understanding these differences, you can choose the appropriate paradigm based on the requirements and constraints of your project, but you should generally favor a functional approach!
