---
sidebar_position: 2
---

# Math, Operators and Operands and Moar Fundamentals

Note that the topics in this section tend to overlap and run into each other. This is because they are all fundamental concepts that are used in conjunction with each other. We'll try to mention all of these by the end of the lesson.

## Math Object

JavaScript has a built-in **object** called `Math` that provides a number of methods and properties for mathematical operations. Notice the capital `M` in `Math`.

Recall that an object can be created in a few different ways, but one of the most common ways is to use the object literal notation `{}`.

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
```

Then, we can access the properties of the object using the dot notation: `console.log(person.name); // John`.

Well, `Math` and all other JS objects work in a similar fashion in that we can access the properties and methods of the `Math` object using the dot notation: `console.log(Math.PI); // 3.141592653589793`. It's just that `Math` is a built-in object, not a custom object like `person`.

### Methods?

A method is a function that belongs to an object. In the case of the `Math` object, the methods are functions that perform mathematical operations.

Returning to the `person` object, we can add a method to it like so:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello() {
    return "Hello!";
  },
};
```

Then, we can call the method using the dot notation: `person.sayHello(); // Hello!`.

The Math object provides a variety of methods and properties for mathematical operations. For example, you can use `Math.sqrt()` to calculate the square root of a number, or `Math.floor()` to round a number down to the nearest integer. You can find more about the Math object and its methods in the [MDN Math documentation.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Modulus Operator

The modulus operator `%` returns the remainder of a division operation. For example, `5 % 2` returns `1` because `5` divided by `2` is `2` with a remainder of `1`: `console.log(5 % 2); // 1`. The modulus operator is often used to determine if a number is even or odd. If a number is divided by `2` and the remainder is `0`, then the number is even; otherwise, it is odd.

Let's write a function that determines if a number is even or odd:

```javascript
function isEven(num) {
  if (num % 2 === 0) return true;
}
```

Then, we can call the function with a number as an argument: `console.log(isEven(5)); // false`.

## `function` Keyword

The `function` keyword is used to define a function in JavaScript. A function is a block of code that performs a specific task. Functions are reusable pieces of code that can be called multiple times with different arguments. Here's an example of a function that adds two numbers together:

```javascript
function add2Nums(a, b) {
  return a + b;
}
```

Note that functions should be named with a verb as they perform an action. Or, they might be named with `is` or `has` if they return a boolean value. The function above is named `add2Nums` because it adds two numbers together.

When working with **function components** (e.g React), functions are written in PascalCase. A function component is a specialized function that returns HTML (JSX) that is specifically meant for rendering in the browser. There really is no difference between a function and a function component, but the naming convention and intent is different.

In either case, functions should almost always use an explicit `return` statement. This is because functions are meant to return a value, and if they don't, they will return `undefined`. In addition, functions should be as small as possible and do one thing only. This is known as the **single responsibility principle SRP**.

## `if` Statement

`if` statements are fundamental to programming. They allow for conditional execution of code. Without these, we really aren't programming. It's what differentiates a programming language from a markup language.

![if it's true, execute the code](/img/if.png)

![if it's not, skip the code](/img/if-skip.png)

**Note:** These images ☝️ are from Free Code Camp's Fundamental of Computer Science course.

The `if` statement is used to execute a block of code if a specified condition is `true`. For example, the following code checks if a number is greater than `10`:

```javascript
const num = 15;

if (num > 10) console.log("The number is greater than 10.");
```

Note that `{}` are not required if the block of code contains only one statement.

## `===` vs `=`

What's the difference between `const x = 5;` and `if (x === 5) { ... }`? The `=` operator is the assignment operator, which assigns a value to a variable. The `===` operator is the strict equality operator, which compares two values for equality without converting their types. For example, `5 === "5"` returns `false` because `5` is a number and `"5"` is a string.

So, we use `=` a majority of the time whenever we are creating a variable and binding it to some data. We use `===` when we want to compare two values, usually in a **conditional statement,** for instance in an `if` statement.

`=` is an **assignment operator** and `===` is a **comparison operator**.

There is also a `==` operator, which is the loose equality operator. It compares two values for equality, converting their types if necessary. For example, `5 == "5"` returns `true` because `5` is a number and `"5"` is a string, but they are equal when converted to the same type. Modern JS code tends to use `===` for comparisons. `==` usually only appears in older code 🤮 and can lead to confusion 😕.

## `>`, `<`, `>=`, `<=`

These are comparison operators. They are used to compare two values and return a boolean value (`true` or `false`). For example, `5 > 3` returns `true` because `5` is greater than `3`. Similarly, `5 < 3` returns `false` because `5` is not less than `3`.

## Concatenation

Concatenation is the process of combining two or more strings into a single string. In JavaScript, you can use the `+` operator to concatenate strings. For example, `"Hello, " + "world!"` returns `"Hello, world!"`.

```javascript
const firstName = "John";
const lastName = "Doe";

console.log("Hello, " + firstName + " " + lastName + "!");
```

Of course, `+` is most commonly associated with performing addition, but JavaScript is smart enough to know that if one of the operands is a string, it should concatenate the values instead of adding them. The downside is that this can especially be tricky when dealing with numbers. If any of the numbers have quotation marks, JS will treat them all as strings. "2" + 2 would give us... 22, because there was a "2" string.

### Implicit Conversion

Whenever JS decides on its own to 'convert' the data type, this is known as implicit conversion. JS is a dynamically typed language; this means that we are free to change the type of our data whenever we please (as opposed to statically typed languages) and JS will also change data types as it sees fit.

```js
const name = "Yoda";
const numOfYears = 900;

console.log(
  "Hi, my name is, " +
    name +
    "I have been learning programming for about " +
    numOfYears +
    " years."
);
```

### Template Literals

In modern JS, we avoid string concatenation. Instead, we use **template literals.** Template literals are enclosed by backticks (`) and allow you to embed expressions within the string.

```javascript
const firstName = "John";
const lastName = "Doe";

console.log(`Hello, ${firstName} ${lastName}!`);
```

## Logical Operators

Logical operators are used to determine the logic between variables or values. There are three logical operators in JavaScript: `||` (OR), `&&` (AND), and `!` (NOT).

### OR (`||`)

The OR operator returns `true` if at least one of the operands is `true`. For example, `true || false` returns `true` because the first operand is `true`. If both operands are `false`, the OR operator returns `false`.

### AND (`&&`)

The AND operator returns `true` if both operands are `true`. For example, `true && false` returns `false` because the second operand is `false`. If both operands are `true`, the AND operator returns `true`.

### NOT (`!`)

The NOT operator returns `true` if the operand is `false` and `false` if the operand is `true`. For example, `!true` returns `false` and `!false` returns `true`.

## Short-Circuit Evaluation

Short-circuit evaluation is a technique used to improve the performance of logical operators. When using the OR operator (`||`), if the first operand is `true`, the second operand is not evaluated because the result will always be `true`. Similarly, when using the AND operator (`&&`), if the first operand is `false`, the second operand is not evaluated because the result will always be `false`.

```javascript
const x = 5;
const y = 10;

// The second operand is not evaluated because the first operand is true.
if (x > 0 || y > 0) console.log("At least one operand is true.");
```

## Code Comments

Comments are used to explain code and make it easier to understand. Comments are ignored by the JavaScript engine and are not executed. There are two types of comments in JavaScript: single-line comments and multi-line comments.

### Single-Line Comments

Single-line comments start with `//` and continue until the end of the line. For example: `// This is a single-line comment.`

### Multi-Line Comments

Multi-line comments start with `/*` and end with `*/`. For example:

```javascript
/*
This is a multi-line comment.
It can span multiple lines.
*/
```

### Using Comments

Comments should be used to explain code that is not immediately obvious. For example, you might use a comment to explain the purpose of a function or to describe the behavior of a complex algorithm. Comments should be concise and to the point. They should not be used to explain trivial code that is self-explanatory.

### Self-Documenting Code

The best code is self-documenting, meaning that it is easy to understand without the need for comments. You can achieve self-documenting code by using descriptive variable names, writing clear and concise code, and following best practices. Comments should be used sparingly and only when necessary, unless otherwise specified. Meaning that, for the purposes of learning and/or submitting assignments, you should comment your code as much as possible.
