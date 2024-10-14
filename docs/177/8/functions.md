---
sidebar_position: 2
---

# Introduction to Functions

Fortunately, we have already been introduced to functions, but this section will dive deeper into the concept. Functions are the building blocks of JavaScript. They are reusable blocks of code that can be called multiple times. Functions can take in parameters and return values. They can also be assigned to variables, passed as arguments, and stored in data structures.

![functions](/img/function.png)

```javascript
/**
 * FUNCTION DECLARATION
 * Call it 'add2Nums' or whatever you want - BTW, functions usually do something, so it's nice to name them starting with a verb
 * Specify 2 PARAMETERS - 'x' and 'y'.
 * The ARGUMENTS that this function will receive will be bound to 'x' and 'y' respectively. This is essentially what we have been doing with 'const,' but the fxn. manages this for us.
 */
function add2Nums(x, y) {
  return x + y;
}

// INVOKE/EXECUTE/RUN the function with the ARGUMENTS 200 and 300 - ARGUMENT 200 will be bound to 'x' while we are running 'add2Nums'
// Whatever data comes back, bind it to the variable 'sum'
const sum = add2Nums(200, 300);
```

A function is a machine (washing machine, toaster, oven, etc.). They generally have one major purpose. `()` is the 'on button.' They are set up to receive some arguments (usually). We must add the 👚 or 🍞 (arguments), etc. and hit the 'power button,' `()` to get useful results returned to us.

The video below explains functions in more detail:

<div class="sp-embed-player" data-id="cZnbc4VdsqD">
<script src="https://go.screenpal.com/player/appearance/cZnbc4VdsqD"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZnbc4VdsqD?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

Although most of this video is a review, there are couple of additional points about some 'best practices' that are worth noting:

<div class="sp-embed-player" data-id="cZnZrXVKI7W">
<script src="https://go.screenpal.com/player/appearance/cZnZrXVKI7W"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZnZrXVKI7W?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

## Replacing `else` with `return`

Consider a function that checks if a number is even. We can replace the `else` statement with a `return` statement. This is because the `if` statement will return `true` or `false`, and the `else` statement will return `false` or `true`. This is redundant. We can simply return the result of the `if` statement.

**Before:**

```javascript
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

**After:**

```javascript
function isEven(num) {
  if (num % 2 === 0) return true;
  return false;
}
```

## Arrow Functions

**Arrow functions** are a more concise way to write functions. They are especially useful when writing functions that take in a single argument and return a single value. Arrow functions are written using the `=>` syntax.

```javascript
/**
 * ARROW FUNCTION
 * This is a more concise way to write functions.
 * The '=>' is the 'fat arrow' and it's a way to say, "Hey, I'm a function!"
 * The 'return' keyword is implicit - we don't need to write it.
 * The 'return' keyword is implicit - we don't need to write it.
 */
const add2Nums = (x, y) => x + y;

// INVOKE/EXECUTE/RUN the function with the ARGUMENTS 200 and 300 - ARGUMENT 200 will be bound to 'x' while we are running 'add2Nums'
// Whatever data comes back, bind it to the variable 'sum'
const sum = add2Nums(200, 300);
```
