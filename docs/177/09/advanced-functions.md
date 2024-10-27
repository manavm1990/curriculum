---
sidebar_position: 1
---

# Advanced Functions

A parameter is a variable in a function declaration. An argument is the data you pass into the function parameters when it is called.

**Everything in JS is an object, except primitives (and even some of those can behave as objects temporarily).**

This means that even functions are objects! 😕

## Functions as First-Class Objects

Functions are first-class objects in JavaScript. What does this mean? To answer that we'll compare functions to the simplest, most general object, the object literal!

### Functions Assigned to Variables

`const person = { name: "John", age: 32 };` means that objects can be assigned to variables.

Then, so can functions. For example:

```javascript
const greet = function () {
  console.log("Hello!");
};
```

Granted, we don't normally write functions like that, but we could.

### Functions Passed as Arguments (Callbacks)

Coming back to objects, we can do like this one: `greet(person);`. Here, we assume that there is a function defined called `greet`, but the point is that we can pass an object in to a function as an argument.

So, that means that we can pass a function as an argument into another function! In fact, we have been exposed this already when added event listeners to elements in the DOM. And also, whenever we use `setTimeout` or `setInterval`, or call the `map` method on an array.

Passing functions into function is a 🔑 feature of higher-order functions. A higher-order function is a function that takes another function as an argument or returns a function as a result.

`document.querySelector('button').addEventListener("click", greet);` Here, `addEventListener` is a method scoped inside the `document` object. Recall that a method is a function that is a property of an object. Then, within `addEventListener`, we have 2️⃣ arguments: the event type and the function to call when the event occurs. This pattern is known as a **callback function.** It's a function that is passed as an argument to another function and is executed after some operation has been completed. It's 'called back' by another function instead of directly by us in the code. In this case, `greet` is called by `addEventListener` anytime the `click` event occurs on some button.

In this example Simon game, we see many examples of [using a `setTimeout` function](https://github.com/SWIC-Web-Dev/simon-game/blob/9b548140dd0e59829a883a50ee3e78576ff9b373/src/lib.js#L16) to delay the execution of some code. Again, notice the callback pattern used here.
In this instance, it's called after a certain amount of time has passed, expressed in milliseconds as the second argument to `setTimeout`.

### Functions Returned from Functions (Closures)

Coming back to objects, we can have a function like this: `const getPerson = function () { return person; };`. Here, we have a function that returns an object. If we can return an object literal from a function, then we can return a function from a function! For example:

```javascript
function createScoreIncrementor(increment) {
  return function (currentScore) {
    return currentSore + increment;
  };
}
```

Notice that we are using a function to return another function. This patter is known as a **closure.** A closure is a function that 'closes over' some variables from the outer scope. In this case, the inner function closes over the `increment` variable from the outer function. This allows the inner function to access the `increment` variable even after the outer function has finished executing.

To understand this better (and it is a tricky concept! 😅), let's take a step back and look at the lifecycle of a function parameter.

#### The Lifecycle of Function Parameters

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

When we call `greet("John")`, the `name` parameter is created and assigned the value `"John"`. The function then executes and returns the string `"Hello, John!"`. After the function has finished executing, the `name` parameter is destroyed and the memory it occupied is freed up.

In other words, `"John"` is bound to `name` only while the function is running. Once the function is done, `name` breaks up with `"John"` and `"John"` is thrown to the garbage collector.

As an analogy, function parameters and the arguments used to call them with are like a 'one-night stand,' or a one-call stand. They binding relationship, in this case between `"John"` and `name` exists while the function is being called and then, just like that, it's all over! 😢

#### Back To Closures

```javascript
function createScoreIncrementor(increment) {
  return function (currentScore) {
    return currentSore + increment;
  };
}

// We get back a function that maintains the relationship between `increment` and `3`...
const incrementFieldGoal = createScoreIncrementor(3); // A field goal in 🏈 is 3 points.

let teamScore = 0;

/**
 * We pass `teamScore` into the function that was returned from `createScoreIncrementor`...
 * The function maintains the relationship between `increment` and `3`...
 * The function adds `3` to `teamScore` and returns the new value...
 * We then throw away that original `0` and assign the new value, `3` to `teamScore`...
 */
teamScore = incrementFieldGoal(teamScore);

console.log(teamScore); // 3
```

In this example, `incrementFieldGoal` is a function that maintains the relationship between `increment` and `3`. When we call `incrementFieldGoal`, it adds `3` to `teamScore` and returns the new value. The relationship between `increment` and `3` is maintained even after the outer function has finished executing. This is what we mean by a closure.

The original `3` stays alive and is bound to `increment` even after the outer function has finished executing because it's trapped inside of the returned function - the one that increments the score, by `3`.

Utilizing the function above, we can create as many different 'incrementors' as we want, each with its own increment value. `const incrementTouchdown = createScoreIncrementor(6);` would create a function that increments the score by `6` points. `const incrementSafety = createScoreIncrementor(2);` would create a function that increments the score by `2` points. In each case the argument passed in for `increment` (`3`, `6`, `2`) is 'closed over' by the inner function and maintained even after the outer function has finished executing. This is the power of closures!

Now, we probably won't write too many closures directly, but libraries like React utilize closures to maintain state in function components.

## Arrow Functions ➡️

Arrow functions are a shorthand way of writing functions in JavaScript. `const add2Nums = (x, y) => x + y;` is the same as `function add2Nums(x, y) { return x + y; }`. If there is only one line of code in the function, you can omit the curly braces and the `return` keyword.

`const createScoreIncrementor = increment => currentScore => currentScore + increment;`. Note that if there is only one parameter, we can even omit the parentheses around the parameter list.

When writing your functions, you can stick with using the `function` keyword, but arrow functions are more concise and are generally preferred in modern JavaScript. You could even write the function however you like and then ask Copilot 🤖 to refactor ♻️ it for you.

Do note that there are some differences between arrow functions and regular functions as it pertains to the keyword `this`. However, as this class is more focused on writing modern JS in a functional style, we won't be covering those differences in detail, but perhaps we can discuss them in a future class.

---

<div class="sp-embed-player" data-id="cZfhejVsFTV">
<script src="https://go.screenpal.com/player/appearance/cZfhejVsFTV"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZfhejVsFTV?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

---

Additional **Assigned** Reading:

- [Eloquent JavaScript on Functions](https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf). Read Chapte 3: Functions. Stop when you get to the part about recursion. You don't need to go any further. This should be pages 58-71 in the PDF.
