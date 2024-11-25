---
sidebar_position: 2
---

# Reactivity II: Getting Closer to React

In the previous section, we learned how to create a reactive counter. Here, we'll build a more sophisticated system using state management and components.

## Opening Questions 🤔

- How do you create reusable UI elements that react to data changes?
- What problems arise when multiple components share data?
- How can we ensure consistent updates across components?

## Function Components

Components are reusable UI factories that output HTML:

```
function Count(count) {
  return `<p class="text-4xl text-red-500 text-center">${count}</p>`;
}
```

```
function Button(text, id) {
  return `<button id="${id}" class="m-4 rounded shadow text-white bg-black px-4 py-2">${text}</button>`;
}
```

## Understanding State Management 🏦

### Immediately Invoked Function Expression (IIFE) 😕

Let's break this down. We know what a function expression is:

```js
const add = (a, b) => a + b;
```

An IIFE is a function that runs or is INVOKED immediately after it's defined:

```js
const result = (function (a, b) {
  return a + b;
})(2, 3);

console.log(result); // 5
```

Any function written like this:`(() => { ... })()` is an IIFE.

Again, we are defining the function and just calling it immediately after. Notice the extra parentheses around the function definition... that's what makes it an IIFE.

### Why Use an IIFE? 🤔

- Regular functions are like bank visits - temporary access.

```js
// Regular function - state is temporary
function updateBankState() {
  let vault = 100; // Start with $100
  vault = vault + 50; // Deposit $50
  console.log(vault); // 150
  return vault;
}

updateBankState(); // Shows 150
updateBankState(); // Shows 150 again - doesn't remember the +50
```

We need permanent security for our state.

The IIFE creates a private space for our state, like a vault. IIFE runs once and keeps its scope alive - CLOSURE! The IIFE creates a new **scope** that is not accessible from the outside.

```js
// IIFE - state is permanent
const updateBankState = (() => {
  let vault = 100; // Start with `100`.

  //   Whenever we return a function from a function, we can create a closure!
  return () => {
    vault = vault + 50; // Deposit `50` on each call.
    console.log(vault); // 150
    return vault;
  };
})();

updateBankState(); // Shows 150
updateBankState(); // Shows 200 - remembers the +50

console.log(vault); // Error - vault is private!
```

![Run code in browser console](/img/state-mgmt.png)

Inside the IIFE, we declare a variable vault with an initial value of `100`.
This vault variable is enclosed within the IIFE and is not accessible from the global scope.

The IIFE returns an inner function `() => { ... }`.
This inner function forms a closure, meaning it "remembers" the scope in which it was created. The inner function has access to the vault variable even after the IIFE has finished executing. The global scope cannot access the vault variable directly.

Each time `updateBankState` is called, it updates the vault variable by adding `50` to it. The vault variable retains its value between calls because it is enclosed within the closure.

This demonstrates how closures can be used to maintain state across multiple function calls. By using an IIFE and closures, we can create a function that maintains its own private state, which is a powerful feature in JavaScript for encapsulation and data privacy.

## Reactive Counter State Management

Again, Think of our state system like a bank vault:

- Only bank tellers (setState) can modify what's inside
- Customers (components) can view their balance (getState)
- Account holders (subscribers) get notifications of changes

```js
export default (() => {
  // Private "vault" area - cannot be accessed from outside
  let state = { count: 0 };
  const listeners = [];

  // Public "teller window" - only way to interact with vault
  return {
    /**
     * These are METHODS, scoped inside of this object.
     * They enclose the state variable, making it private.
     */
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      listeners.forEach((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
  };
})();
```

Only our chosen methods can access what's inside, and the global scope must go through these methods to interact with the state.

## Putting It All Together

```js
import Button from "./components/button";
import Count from "./components/count";
import state from "./state";

const app = document.querySelector("#app");

function render() {
  app.innerHTML = `  ${Count(state.getState().count)}
    <div class="flex justify-center">
      ${Button("+1", "increment")}
      ${Button("-1", "decrement")}
    </div>`;
}

state.subscribe(render);
render();

document.addEventListener("click", (event) => {
  if (event.target.id === "increment")
    state.setState({ count: state.getState().count + 1 });
  else if (event.target.id === "decrement")
    state.setState({ count: state.getState().count - 1 });
});
```

## Conclusion

These patterns form the foundation of modern frameworks like React and Vue.

Understanding them helps you:

- Debug state management issues
- Build more maintainable applications
- Better understand React's architecture
