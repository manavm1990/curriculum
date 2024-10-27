---
sidebar_position: 0
---

# Recap: Fundamentals

## `Math`

`Math` is a built-in object in JavaScript that provides mathematical constants and functions. Some common `Math` functions include:

- `Math.round()`: Rounds a number to the nearest integer.
- `Math.floor()`: Rounds a number down to the nearest integer.
- `Math.ceil()`: Rounds a number up to the nearest integer.
- `Math.random()`: Generates a random number between 0 and 1. Upon generating a random number, you can multiply it by a number to get a random number within a specific range.

In each case, we are accessing this object and using the same dot notation as we would do with any other object in JavaScript. Each of the aforementioned functions are more correctly known as methods, as they are functions that are associated with an object. We can't just say `random()`, we have to say `Math.random()`.

## Methods

We can add our own methods to our object literals. Recall that the term 'object literal' refers to the way we create objects in JavaScript using curly braces `{}`.

```javascript
const person = {
  name: "Manav",
  age: 25,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
```

It's nice to know that `this` is a reference to the object that the method is called on. In this case, `this` refers to the `person` object. We can then access the properties of the object using `this.propertyName`.

## Modulus Operator

`%` is the modulus operator. It returns the remainder of a division operation. For example, `5 % 2` returns `1` because `5` divided by `2` is `2` with a remainder of `1`.

## `function` Keyword

Attaching methods using `this` to objects is more of what's known as object oriented programming (OOP). In many modern libraries and frameworks, such as React, it's more common to take a more functional approach to programming. This means that we don't attach methods to objects, but instead pass functions around as arguments to other functions.

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

Given that `greet` function, and assuming we had a `person` object defined, we might use it like so: `greet(person.name)`.

When creating functions, we can use the `function` keyword followed by the name of the function. In most cases, this is going to be a verb that describes what the function does. We then have a set of parentheses `()`. Inside of those, we specify any parameters that the function might accept in order to do its job. Finally, we have a set of curly braces `{}`. Inside of those, we write the code that the function will execute.

## Conditional Logic with `if` Statements

`if` statements are used to execute a block of code if a condition is `true`. We can also use `else if` and `else` to execute code if the condition is `false`. Summarily, `if` statements always work using Booleans. Anything in the parentheses of an `if` statement is going to be implicitly coerced to a Boolean. As an example any number that is not `0` is going to be `true`.

```javascript
const accountBalance = 10.5;

if (accountBalance) console.log("You have money in your account.");
else console.log("You are broke.");
```

Above, note that we didn't have to say `accountBalance > 0`. We can just say `accountBalance` because it's going to be implicitly coerced to a 'truthy' value as long as it's not `0`.

Also, note that since the code scoped inside of the `if` statement is only one statement, we can omit the curly braces `{}`.

## Assignment vs Comparison Operators

`=` is used to assign or bind some data on the right to the variable on the left. `===` is used to compare two values, and will evaluate to a Boolean.

Other comparison operators are...comparable to what you might find in math:

- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal to
- `<=`: Less than or equal to

## `+` Operator

The `+` operator is used to concatenate strings. If you have two strings and you use the `+` operator, JavaScript will concatenate them together. If you have a string and a number, JavaScript will coerce the number to a string and concatenate them together.

```javascript
const name = "Manav";
const age = 25;

console.log("Hello, my name is " + name + " and I am " + age + " years old.");
```

However, for strings, we are better off using template literals. They are more readable and easier to work with.

```javascript
// Referencing `name` and `age` variables above ☝️.
`Hello, my name is ${name} and I am ${age} years old.`;
```

**Notice the backticks.** This is how we create a template literal. Inside of the `${}` we can put any JavaScript expression. This is a much cleaner way to concatenate strings.

## Logical Operators

These are commonly seen in `if` statements. There are three logical operators in JavaScript:

- `||` (OR)
- `&&` (AND)
- `!` (NOT)

We use these to form more complex conditions in our `if` statements.

We can also use logical operators to short-circuit the evaluation of an `if` statement. If the first operand is `true` in an `||` statement, the second operand is not evaluated because the result will always be `true`. Similarly, if the first operand is `false` in an `&&` statement, the second operand is not evaluated because the result will always be `false`.

```javascript
const x = 5;
const y = 10;

if (x || y) console.log("At least one operand is 'truthy.'");
```
