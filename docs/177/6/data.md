---
sidebar_position: 2
---

# Data Types and References

## Create Data and Store It On the Heap

To interact and give instructions to a computer, everything we do is in terms of data and memory. Data must be created and then stored in a computer's memory for future access. Case in point, every single value that we create in JavaScript - `"string"`, `23`, `true`, `{name: "Manav", age: 230}`, `[1, 2, 3, "hello", { name: "Dhanav", age: 23 }]` - is stored in a generic area of memory commonly referred to as the heap. But how do we access this abstract data from memory? By creating **references.**

### Create Primitive Data Types

**Primitives** are data types that can only hold **one discrete piece of data.** There are seven primitive data types in all, but two are beyond the scope of this course. The five we will focus on are:

- **Number**: Any number, including decimals and negative numbers.
- **String**: Any sequence of characters.
- **Boolean**: A true or false value.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: A variable that has been explicitly assigned a 'nothing' value.

#### Number

```javascript
23;
8675309;
1.99;
-1000;
9e3;
```

#### String

```javascript
"Hello, World!";
"Manav";
"23";
"true";
```

#### Boolean

```javascript
true;
false;
```

> Booleans can be used for many things, however it basically all comes down to the fact that we can decide whether certain blocks of code or other tasks should get executed based on whether a variable is true or false.
> Lydia

---

`undefined` and `null` are confusing 😕. We'll revisit them.

### Bind Data to Variable

In programming, it's commonplace to create 'references' to values in memory. This is the concept of 'instantiating a variable' (`const`, `let`) and 'assigning a value to a variable' (`=`).

```javascript
/**
 * `=` is an ASSIGNMENT OPERATOR. It takes whatever is on the right side and assigns it to the left.
 * So...on the right, we have a STRING. We can tell it's a STRING b/c it's wrapped in "".
 * On the left, a couple of things are happening:
 *   1. `const` is a keyword that reserves space in memory.
 *   2. After `const`, we give a name for that space in memory.
 *   3. The right side is assigned to the left side via an ASSIGNMENT OPERATOR, `=`.
 */
const js = "JavaScript"; // Semicolons are optional but recommended for clarity.
const java = "Java";

// If we intend to RE-ASSIGN the VALUE associated with a VARIABLE, then we probably want to use 'let'
let x = 3;

/**
 * RE-ASSIGN the VALUE BOUND BY 'x'.
 * '3' is 'thrown out' and replaced
 */
x = 4;
```

According to most modern style guides, we will prefer to use `const` unless there is a specific reason to use `let`. We will never use `var`.

We'll learn more about this later, but know that `const` doesn't actually mean 'constant' in the way that you might think. It just means that the reference to the data is constant. The data itself can change/mutate, if it's a collection type (like an array or object).

### `undefined` and `null`

#### `undefined`

`undefined` is nothing but **the absence of any value.** `let x` means that we have reserved some space in memory under the variable `x`, but we have failed to assign/bind any data. This is fine for `let` - not allowed with `const`. `const` requires us to assign a value at the time of declaration. We could do `const x = undefined`, but that's a bit silly 🙃.

`undefined` is another primitive data type. In fact we could do: `let x = undefined`, but this is generally discouraged. Heck, we could be really useless and say, `const y = undefined`. This is just...weird. We are saying that `y` is to be 'married' to...the 'absence of any value.' No reason to do this.

Any time we see `undefined` bound to our variable we know that this was unintentional and we can have an idea of where we need to investigate our code. That's one of the reasons why we should never deliberately assign `undefined` to a variable. Note that there may be times to do this in TypeScript, but we are not learning TypeScript (maybe 🤔 in CIS 277!).

#### `null`

`null` is also a primitive data type in JS. It means, "the deliberate assignment of a 'nothing' value." It is uncommon to need this, but consider this to be an 'intentional assignment of nothing' as opposed to `undefined`

#### `'not defined'` vs. `undefined` vs. `null`

In normal parlance we might say that something is 'not defined' when we mean that it's 'undefined.' In JS, however, 'not defined' is a different thing. It means that the variable has not been declared at all. `'not defined'` is not a data type at all. It's an error message that you are likely to see in your career.

If you opened up an empty JS file and did `console.log(x)`, you would get a `'not defined'` error. If you did `let x; console.log(x)`, you would get `undefined`.

_Eloquent JavaScript_ likens creating references to data to an 🐙. If we follow that analogy, `undefined` means that the arm exists and is named something (in the 📖, he likens this name to a tattoo) but it's just open - not holding anything at all. `'not defined'` is an error message that means that the arm just doesn't exist at all. `null` means that the arm is wrapped tightly around...nothing.

<div class="sp-embed-player" data-id="cZeFVBV73Ir">
<script src="https://go.screenpal.com/player/appearance/cZeFVBV73Ir"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZeFVBV73Ir?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>
