---
sidebar_position: 3
---

# Deep Dive: `filter`

The `filter()` method is a powerful tool for selecting specific elements from arrays based on certain conditions. Let's explore how to use `filter()` effectively in real applications.

## How `filter` Works

The `filter` method:

1. Creates a new array
2. Tests each element with a function
3. Keeps elements that return `true`
4. Skips elements that return `false`

Here's the basic signature:

```javascript
array.filter((element, index, array) => {
  // return true to keep element, false to exclude
});
```

## Filtering Patterns

### Basic Value Filtering

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Get even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// [2, 4, 6]

// Get numbers greater than 3
const largeNumbers = numbers.filter((num) => num > 3);
// [4, 5, 6]
```

### Object Filtering

```javascript
const products = [
  { name: "Widget", price: 10, inStock: true },
  { name: "Gadget", price: 20, inStock: false },
  { name: "Doohickey", price: 15, inStock: true },
];

// Get in-stock products
const availableProducts = products.filter((product) => product.inStock);

// Get affordable products (under $15)
const affordableProducts = products.filter((product) => product.price < 15);
```

### Complex Conditions

```javascript
const users = [
  { name: "Alice", age: 25, roles: ["user", "admin"] },
  { name: "Bob", age: 17, roles: ["user"] },
  { name: "Charlie", age: 30, roles: ["user"] },
];

// Get adult admins
const adultAdmins = users.filter(
  (user) => user.age >= 18 && user.roles.includes("admin")
);

// Get users with specific criteria
const specialUsers = users.filter((user) => {
  // Multiple conditions
  const isAdult = user.age >= 18;
  const hasMultipleRoles = user.roles.length > 1;
  const nameStartsWithA = user.name.startsWith("A");

  return isAdult && (hasMultipleRoles || nameStartsWithA);
});
```

## Common Mistakes

### ❌ Using `filter` When `find` Would Be Better

```javascript
// Bad: Using filter when we only need one item
const user = users.filter((user) => user.id === 123)[0];

// Good: Using find for single item
const user = users.find((user) => user.id === 123);
```

### ❌ Mutating Objects During Filtering

```javascript
// Bad: Modifying objects while filtering
const activeUsers = users.filter((user) => {
  user.lastChecked = Date.now(); // Mutation!
  return user.isActive;
});

// Good: Keep filter pure
const activeUsers = users.filter((user) => user.isActive);
```

### ❌ Complex, Hard-to-Read Conditions

```javascript
// Bad: Complex, nested condition
const filteredItems = items.filter(
  (item) =>
    item.type === "special" &&
    ((item.count > 10 && item.price < 50) ||
      (item.count <= 10 && item.price < 30))
);

// Good: Break down complex logic
const isAffordable = (item) => {
  if (item.count > 10) return item.price < 50;
  return item.price < 30;
};

const filteredItems = items.filter(
  (item) => item.type === "special" && isAffordable(item)
);
```

## Tips for Effective `filter()` Usage

### Keep Conditions Clear

```javascript
// Less clear
data.filter((x) => x.y && x.z > 10);

// More clear
products.filter((product) => product.inStock && product.price > 10);
```

### Chain with Other Methods

```javascript
const products = [
  { name: "Widget", price: 10, categories: ["tools", "home"] },
  { name: "Gadget", price: 20, categories: ["electronics"] },
  { name: "Doohickey", price: 15, categories: ["tools"] },
];

// Get names of affordable tools
const affordableToolNames = products
  .filter((product) => product.price < 15)
  .filter((product) => product.categories.includes("tools"))
  .map((product) => product.name);
```

### Consider Performance

```javascript
// Less efficient: Filters entire array multiple times
const results = items
  .filter((item) => item.type === "special")
  .filter((item) => item.price < 100)
  .filter((item) => item.inStock);

// More efficient: Single pass with combined conditions
const results = items.filter(
  (item) => item.type === "special" && item.price < 100 && item.inStock
);
```

---

**Remember:** `filter()` is for selecting elements that meet specific criteria. If you're looking for a single element, consider using `find()`. If you need to transform elements, use `map()`. If you need to accumulate a result, use `reduce()`.
