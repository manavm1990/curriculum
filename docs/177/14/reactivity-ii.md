---
draft: true
sidebar_position: 2
---

# Reactivity II: Better State Management

## Moving Beyond Simple Variables

In our first lesson on reactivity, we used a simple variable to store our counter:

```javascript
let count = 0;
```

While this works for simple examples, real applications need more robust state management. Let's improve our counter by introducing some important concepts.

### Why Change Our Approach?

Consider what happens when we need to track multiple values:

```javascript
// 🚨 Messy approach with multiple variables
let count = 0;
let lastUpdate = new Date();
let numberOfClicks = 0;

function updateCount() {
  count += 1;
  lastUpdate = new Date();
  numberOfClicks += 1;
  // Easy to forget to update one of these!
  updateDisplay();
}
```

## Introducing State Objects

Instead of separate variables, we can group related data into a "state" object:

```javascript
// ✅ Better: One state object
let state = {
  count: 0,
  lastUpdate: new Date(),
  numberOfClicks: 0,
};
```

### Updating State Properly

There are two ways we might update our state. Let's look at both:

❌ **Direct Mutation** (What we want to avoid):

```javascript
function setCount(newCount) {
  state.count = newCount; // Directly changing the object
  state.lastUpdate = new Date();
  state.numberOfClicks += 1;
  updateDisplay();
}
```

✅ **Creating New State** (What we want to do):

```javascript
function setState(newState) {
  state = {
    ...state, // Copy all existing properties
    ...newState, // Override with new values
    lastUpdate: new Date(), // Add additional updates
  };
  updateDisplay();
}
```

### Complete Example with Better State Management

```javascript
// 1. Our state object holds all our data
let state = {
  count: 0,
  lastUpdate: new Date(),
  numberOfClicks: 0,
};

// 2. Update display now shows more information
function updateDisplay() {
  document.querySelector("#count-display").textContent = state.count;
  document.querySelector("#clicks").textContent = state.numberOfClicks;
  document.querySelector("#last-update").textContent =
    state.lastUpdate.toLocaleTimeString();
}

// 3. setState handles all state updates
function setState(newState) {
  state = {
    ...state,
    ...newState,
    lastUpdate: new Date(),
    numberOfClicks: state.numberOfClicks + 1,
  };
  updateDisplay();
}

// 4. Event listeners use setState
document.querySelector("#increment").addEventListener("click", () => {
  setState({ count: state.count + 1 });
});

document.querySelector("#decrement").addEventListener("click", () => {
  setState({ count: state.count - 1 });
});

// 5. Initial display
updateDisplay();
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Advanced Counter</title>
  </head>
  <body>
    <div class="text-center p-8">
      <h2>Advanced Counter</h2>
      <div id="count-display">0</div>
      <div id="clicks">0 clicks</div>
      <div id="last-update"></div>
      <button id="increment">+1</button>
      <button id="decrement">-1</button>
    </div>
    <script src="counter.js"></script>
  </body>
</html>
```

## Why Is This Better?

1. **Single Source of Truth**: All our data is in one place
2. **Predictable Updates**: State changes happen in one function
3. **Easy to Add Features**: Need new data? Just add it to the state object
4. **Immutability**: We create new state instead of modifying existing state
5. **Debugging**: Easier to track when and how state changes

## This Looks Familiar

If this pattern looks familiar, it's because it's similar to how React's `useState` works:

```javascript
// React version
const [state, setState] = useState({
  count: 0,
  lastUpdate: new Date(),
  numberOfClicks: 0,
});

// Update state in React
setState((prevState) => ({
  ...prevState,
  count: prevState.count + 1,
}));
```

## Practice Exercises

1. Add a "reset" feature that resets count but keeps track of total resets
2. Add an "undo" feature that goes back to the previous state
3. Add a "double" button that multiplies the count by 2

### Exercise Solution: Undo Feature

```javascript
let state = {
  count: 0,
  lastUpdate: new Date(),
  numberOfClicks: 0,
  previousStates: [], // Array to store previous states
};

function setState(newState) {
  // Save current state before updating
  const previousState = { ...state };
  state = {
    ...state,
    ...newState,
    lastUpdate: new Date(),
    numberOfClicks: state.numberOfClicks + 1,
    previousStates: [...state.previousStates, previousState].slice(-5), // Keep last 5 states
  };
  updateDisplay();
}

function undo() {
  if (state.previousStates.length > 0) {
    const previousState = state.previousStates[state.previousStates.length - 1];
    state = {
      ...previousState,
      previousStates: state.previousStates.slice(0, -1),
    };
    updateDisplay();
  }
}
```

## Key Takeaways

1. Group related data into a state object
2. Create new state objects instead of modifying existing ones
3. Handle all state updates through a single function
4. Keep your state management consistent
5. Think about state history and tracking changes

## Next Steps

In the next lesson, we'll look at how to:

- Handle form inputs with this pattern
- Manage lists and arrays in state
- Break our code into reusable components

Would you like me to expand any of these sections or create additional practice exercises?
