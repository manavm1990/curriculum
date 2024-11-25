---
sidebar_position: 0
---

We reference [Ryan McDermott's Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript) for naming conventions and the Single Responsibility Principle (SRP).

# JavaScript Fundamentals Mega Recap

## The JS Journey So Far

Our journey into JavaScript has been purposeful: to build a solid foundation before diving into React. React is built on top of JS, and understanding these fundamentals is crucial for becoming an effective React developer.

React embraces functional programming principles, which is why we've focused heavily on:

- Pure functions
- Avoiding mutations
- Working with immutable data
- Array methods like `map`, `filter`, and `reduce`

While we haven't touched React yet, everything we've learned sets us up for success with React and beyond. Remember: frameworks come and go, but these JS fundamentals remain constant.

## Clean Code Principles

### Naming Conventions

Good naming is crucial for maintainable code. Follow these patterns:

```javascript
// Variables (nouns) - describe things
const user = { name: "Alice" };
const userList = ["Alice", "Bob"];
const userCount = 42;

// Functions (verbs) - describe actions
const getUserData = () => {
  /* ... */
};
const validateInput = (input) => {
  /* ... */
};
const processPayment = (payment) => {
  /* ... */
};

// Components (PascalCase nouns)
const UserProfile = () => {
  return <div>Profile Content</div>;
};

const NavigationBar = ({ items }) => {
  return <nav>{/* ... */}</nav>;
};
```

### Single Responsibility Principle (SRP)

Each function, component, or module should do one thing well:

```javascript
// Bad - mixing responsibilities
const processUserData = (userData) => {
  validateUser(userData);
  saveToDatabase(userData);
  sendEmail(userData.email);
  updateUI(userData);
};

// Good - separated responsibilities
const validateUser = (userData) => {
  /* ... */
};
const saveUser = (userData) => {
  /* ... */
};
const notifyUser = (email) => {
  /* ... */
};
const updateUserUI = (userData) => {
  /* ... */
};
```

## JS Types and Methods

Everything in JavaScript is an object except for primitives:

- numbers
- strings
- booleans
- undefined
- null
- symbol
- bigint

```javascript
// Primitives are immutable
const str = "hello";
str.toUpperCase(); // Returns "HELLO"
console.log(str); // Still "hello"

// This immutability concept will be crucial in React
const nums = [1, 2, 3];
const doubled = nums.map((x) => x * 2); // Creates new array instead of modifying
```

## Variables

Always prefer `const` over `let`. This preference becomes even more important as we want to ensure our data is predictable and immutable where possible.

```javascript
// Good - most variables will be const
const name = "Alice";
const age = 30;
const nums = [1, 2, 3];

// Only use let when reassignment is absolutely necessary
let score = 0;
score += 10;
```

## Array Methods for Data Transformation

These methods help us transform data without mutations:

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: transform each element
const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10]

// filter: keep elements that pass a test
const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4]

// reduce: compute derived values
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 15
```

## References and Spreading

Understanding references is crucial for state management:

```javascript
// Spread operator creates shallow copies
const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, age: 31 };

// Nested objects require careful handling
const user = {
  name: "Bob",
  settings: { theme: "dark" },
};
const userCopy = {
  ...user,
  settings: { ...user.settings }, // Proper nested copy
};
```

## Pure Functions

Pure functions are predictable and easier to test:

```javascript
// Pure function - same input always gives same output
const formatUser = (user) => ({
  fullName: `${user.firstName} ${user.lastName}`,
  age: user.age,
});

// Impure function - relies on external state
let globalUser = null;
const setUser = (user) => {
  globalUser = user; // Side effect!
};
```

## Modern JavaScript Features

```javascript
// Destructuring - you'll use this constantly
const person = { name: "Alice", age: 30 };
const { name, age } = person;

// Optional chaining - helpful for handling nested data
const user = {
  address: {
    street: "123 Main St",
  },
};
const zipCode = user?.address?.zipCode; // undefined instead of error

// Template literals - useful for dynamic content
const greeting = `Hello, ${name}!`;

// Arrow functions
const double = (n) => n * 2;
```

## What's Next?

The DOM. Document Object Model. Everything in JS is an object......

So, the browser will help JS out by modeling the HTML document as an object, with applicable properties and methods (same as functions, but need to scoped inside an object and called with a `.`, like `document.getElementById()`).

---

## Optional Aside: JavaScript's Prototype-based System vs Classical OOP

If you don't have any prior programming experience and have never heard of Object-Oriented Programming (OOP), you're probably better off for it in terms of learning JS. Folks with strict adherence to OOP principles may find JS's object system a bit more confusing than someone else that doesn't have any preconceived notions. Either way, this secion is totally optional.

If you're coming from languages like Java or C#, it's important to understand that JavaScript's object system is fundamentally different. While modern JavaScript includes the `class` keyword, this is just syntactic sugar over JavaScript's prototype-based inheritance system.

### Prototypal Inheritance (JavaScript's True Nature)

```javascript
// This is how JavaScript objects actually work under the hood
function createUser(name) {
  return {
    name,
    greet() {
      return `Hello, ${this.name}`;
    },
  };
}

// Traditional prototype-based approach
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

// Creating objects
const user1 = createUser("Alice");
const user2 = new User("Bob");

// Objects delegate to their prototype
console.log(user2.__proto__ === User.prototype); // true
```

### The Class Syntax (Syntactic Sugar)

```javascript
// This class syntax...
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

// ...is primarily syntactic sugar over the prototype system above
```

### Modern JavaScript Favors Composition

Instead of either classical or prototypal inheritance, modern JavaScript typically uses composition:

```javascript
// Factory function approach
const createUser = (name) => ({
  name,
  greet: () => `Hello, ${name}`,
});

// Composition through function combination
const withLogging = (entity) => ({
  ...entity,
  log: (message) => console.log(`${entity.name}: ${message}`),
});

// Using composable pieces
const user = withLogging(createUser("Alice"));
user.greet(); // "Hello, Alice"
user.log("Logged in"); // "Alice: Logged in"
```

Key differences from classical OOP languages:

- JavaScript uses prototype delegation, not classical inheritance
- Objects can be created directly without classes
- Properties can be added or removed at runtime
- The `class` keyword is syntactic sugar over prototype-based mechanics
- No true private properties (though there are conventions and newer features)

Modern JavaScript development typically favors:

- Factory functions over constructors or classes
- Object composition over inheritance of any kind
- Pure functions over stateful objects
- Closures for data privacy
- Small, focused objects over large inheritance chains

This understanding is optional but helpful if you're coming from a classical OOP background. Just remember: while JavaScript can simulate classical OOP patterns, its prototype-based system is fundamentally different, and modern JavaScript tends to avoid both in favor of functional composition patterns.
