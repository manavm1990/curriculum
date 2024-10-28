---
sidebar_position: 1
---

# JavaScript Types and Methods

## Everything is an Object... Almost

In JavaScript, we say "everything is an object" but that's not quite true. There are some basic types that aren't objects, called **primitives**:

- Numbers (like `42`, `-3.14`)
- Strings (like `"hello"`, `'world'`)
- Booleans (`true`, `false`)
- `undefined`
- `null`

But here's where it gets interesting. Even though these aren't objects, we can use them like objects! Let's see how.

## The Magic of Boxing

Try this in your console:

```javascript
const name = "alice";
console.log(name.toUpperCase()); // "ALICE"
```

Wait... if `name` is a primitive string (not an object), how can we call methods on it? This is where **boxing** comes in.

When you try to use a method on a primitive, JavaScript automatically:

1. Creates a temporary object wrapper
2. Calls the method
3. Throws away the wrapper

It's like JavaScript saying: "Oh, you want to use a method? Let me wrap that primitive in an object real quick!"

This is why these work:

```javascript
// String methods
"hello".includes("he"); // true
"hello".startsWith("h"); // true
"hello"
  .toUpperCase()(
    // "HELLO"

    // Number methods
    42
  )
  .toString()(
    // "42"
    3.1415
  )
  .toFixed(2); // "3.14"

// Boolean methods
true.toString(); // "true"
```

But this doesn't:

```javascript
42.toString()  // Error! JavaScript thinks the dot is for decimals
```

The fix:

```javascript
(42).toString(); // Works! Parentheses make it clear
(42).toString(); // Also works! First dot is decimal, second is for method
```

## Common Primitive Methods

### String Methods

```javascript
const text = "Hello, World!";

// Testing content
text.includes("Hello"); // true
text.startsWith("Hello"); // true
text.endsWith("!"); // true

// Changing case
text.toLowerCase(); // "hello, world!"
text.toUpperCase(); // "HELLO, WORLD!"

// Finding positions
text.indexOf("World"); // 7
text.lastIndexOf("l"); // 10
```

### Number Methods

```javascript
const num = 42.3456;

// Formatting
num.toFixed(2); // "42.35"
num.toPrecision(3); // "42.3"

// Converting
num.toString(); // "42.3456"
```

### Boolean Methods

```javascript
const bool = true;

// Converting
bool.toString(); // "true"
```

## Important Notes

1. These methods don't change the original primitive:

```javascript
let name = "alice";
name.toUpperCase(); // Returns "ALICE"
console.log(name); // Still "alice"
```

2. Methods on primitives always return a new value:

```javascript
const price = 42.3456;
const formatted = price.toFixed(2); // "42.35"
typeof price; // "number"
typeof formatted; // "string" - toFixed returns a string!
```

3. The temporary object wrapper is just that - temporary:

```javascript
const greeting = "hello";
// JavaScript creates wrapper, calls method, discards wrapper
greeting.someProperty = "test";
console.log(greeting.someProperty); // undefined
```

This knowledge will help you:

- Understand why and how primitive methods work
- Debug issues with method calls on numbers
- Know what to expect when using these methods

Coming up next: Understanding References and the Spread Operator!
