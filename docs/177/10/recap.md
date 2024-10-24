---
sidebar_position: 0
---

# Functions and Functional Programming Recap

## Functions as First-Class Objects

In JavaScript, functions are first-class objects. This means **functions can be treated like any other object**, such as being:

- Assigned to variables.
- Passed as arguments to other functions (callbacks).
- Returned from other functions (closures).

## Callbacks

A **callback function is passed as an argument to another function and executed after some operation has been completed**.

- Examples include event listeners, `setTimeout`, `setInterval`, and the `map` array method.

## Closures

A **closure is a function that "closes over" variables from its outer scope, retaining access to them even after the outer function has finished executing.**

- Closures allow inner functions to access and modify variables from their parent scopes.
- Closures can be used to create functions with private state, such as in the `createScoreIncrementor` example, where the `increment` value is maintained even after the outer function has finished executing.
- React uses closures to manage state in functional components.

## Arrow Functions

**Arrow functions provide a concise syntax for writing functions in JavaScript.**

- They can omit curly braces and the `return` keyword for single-line functions.
- Arrow functions have some differences compared to regular functions regarding the `this` keyword.

## Functional vs. Imperative Programming

### Functional Programming

**Functional programming treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.**

- Principles include:
  - Functions as first-class citizens.
  - Pure functions (always return the same output for the same input and have no side effects).
  - Avoiding shared state and mutable data.
- Favors using methods like `map`, `filter`, and `reduce` that do not mutate the original data.

### Imperative Programming

**Imperative programming uses statements to change a program's state, focusing on how a program operates.**

- Principles include:
  - Sequences of commands.
  - Mutable state (variables can be updated).
  - Control structures (loops and conditionals).
  - Side effects (functions can modify the program's state).

### General Function Practices

- Single Responsibility Principle: A function should have one specific purpose.
- Don't Repeat Yourself (DRY): Create functions to avoid code duplication.
- Return Early: Exit a function as soon as possible to simplify logic.
- Use descriptive verb names for functions, except for function components.
- Keep functions concise and avoid excessive length.
- Limit a function's reach outside its scope; it should be self-contained, receiving arguments, performing its task, and returning a value.
