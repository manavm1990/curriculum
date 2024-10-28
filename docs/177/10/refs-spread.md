---
sidebar_position: 2
---

# References and the Spread Operator

## Understanding References

In JavaScript, when you work with objects and arrays, you're often working with references. Think of it like a TV and its remote:

- The TV is like your data (object or array)
- The remote is like a reference to that data
- You can have multiple remotes (references) controlling the same TV (data)
- When you use a remote, you're affecting the actual TV

```javascript
let tv1 = "Sanyo";
let tv2 = "Magnavox";

// Reassignment. We copy the value bound to `tv1` and assign it to `tv2`. `"Magnavox"` is garbage collected.
tv2 = tv1;

// Each display their own copy of the same string value.
console.log(tv2, tv1);

tv1 = "LG";

// We re-assigned `tv1`, but `tv2` is the same!
console.log(tv2, tv1);
```

## The Problem with References

References can cause unexpected bugs when you think you're creating a copy:

```javascript
const cart = {
  items: ["book", "pen"],
  total: 15,
};

// Try to create a new cart
const newCart = cart;
newCart.items.push("pencil");

console.log(cart.items); // ["book", "pen", "pencil"]
console.log(newCart.items); // ["book", "pen", "pencil"]

// Oops! Both carts were modified because they reference the same data
```

It's like giving someone a copy of your remote - they're still controlling your TV!

## The Spread Operator (...) to the Rescue

The spread operator creates a new copy instead of a reference. It's like actually building a new TV with the same settings:

```javascript
const cart = {
  items: ["book", "pen"],
  total: 15,
};

// Create a truly new cart
const newCart = {
  ...cart, // Copy all properties
  total: 20, // Override the total
};

newCart.items.push("pencil");

console.log(cart.items); // ["book", "pen", "pencil"]
console.log(newCart.items); // ["book", "pen", "pencil"]
```

Wait... the items still changed in both carts! This is because spread only creates a "shallow" copy. Think of it like:

- Building a new TV (object)
- But using the same remote for the channels (nested objects/arrays)

## Deep Copying

To create completely separate copies, including nested data:

```javascript
const cart = {
  items: ["book", "pen"],
  total: 15,
};

// Create a completely new cart
const newCart = {
  items: [...cart.items], // New array with copied items
  total: cart.total,
};

newCart.items.push("pencil");

console.log(cart.items); // ["book", "pen"]
console.log(newCart.items); // ["book", "pen", "pencil"]
// Now they're truly separate!
```

## Common Spread Uses

1. Copying arrays:

```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];
```

2. Combining arrays:

```javascript
const part1 = [1, 2];
const part2 = [3, 4];
const combined = [...part1, ...part2]; // [1, 2, 3, 4]
```

3. Copying objects:

```javascript
const defaults = { theme: "dark", size: "medium" };
const userSettings = { ...defaults, theme: "light" };
```

4. Adding to arrays without mutations:

```javascript
const items = ["apple", "banana"];
// Instead of items.push("orange"):
const newItems = [...items, "orange"];
```

Remember:

- References are like TV remotes - multiple references control the same data
- Spread (...) creates new copies instead of references
- But spread only creates "shallow" copies
- For nested data, you need to spread each level

These concepts are crucial for:

- Avoiding unintended mutations
- Understanding why your data changes unexpectedly
- Writing cleaner, more predictable code
