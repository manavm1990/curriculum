---
sidebar_position: 2
---

# Introduction to Web Reactivity

## The Counter Example

In web development, "reactivity" means making your webpage automatically update when data changes. Instead of manually updating every part of the page, we can create a system that handles updates automatically.

### The Problem We're Solving

Let's say we want to create a simple counter. When you click a button, a number should increase. Simple, right?

Here's what might seem obvious at first:

```javascript
let count = 0;
const button = document.querySelector("#increment");
const display = document.querySelector("#count-display");

button.addEventListener("click", () => {
  count += 1; // Updates the number
  // But nothing changes on the screen!
});
```

**The Problem:** Even though our `count` variable changes, the webpage does not reflect this change. We need to connect our data (the count) to what people see on the screen.

### Creating a Reactive Counter

Here's how we build a proper reactive counter:

```javascript
// 1. Store our data (state)
let count = 0;

// 2. Function to update what people see
function updateDisplay() {
  document.querySelector("#count-display").textContent = count;
}

// 3. Function to safely change our data
function setCount(newCount) {
  count = newCount; // Update the data
  updateDisplay(); // Update what people see
}

// 4. Set up our button
document.querySelector("#increment").addEventListener("click", () => {
  setCount(count + 1); // Always use setCount to change the number
});

// 5. Show the initial count
updateDisplay();
```

### Key Concepts

1. **Single Source of Truth**: We keep our data (state) in one place

   ```javascript
   let count = 0; // This is our single source of truth
   ```

2. **Display Update Function**: One function handles showing the data

   ```javascript
   function updateDisplay() {
     document.querySelector("#count-display").textContent = count;
   }
   ```

3. **State Update Function**: One function handles changing the data

   ```javascript
   function setCount(newCount) {
     count = newCount;
     updateDisplay();
   }
   ```

### Common Mistakes to Avoid

❌ **Don't** update the count directly:

```javascript
count = count + 1; // Wrong! The display won't update
```

✅ **Do** use the update function:

```javascript
setCount(count + 1); // Right! Updates both data and display
```

❌ **Don't** update the display directly:

```javascript
display.textContent = count; // Wrong! Breaks our pattern
```

✅ **Do** use the display function:

```javascript
updateDisplay(); // Right! Keeps everything consistent
```

### Practice Exercises

1. **Add a Decrement Button**

   ```javascript
   document.querySelector("#decrement").addEventListener("click", () => {
     setCount(count - 1);
   });
   ```

2. **Add a Reset Button**

   ```javascript
   document.querySelector("#reset").addEventListener("click", () => {
     setCount(0);
   });
   ```

3. **Challenge**: Add a "Double" Button

   ```javascript
   document.querySelector("#double").addEventListener("click", () => {
     setCount(count * 2);
   });
   ```

### Complete Working Example

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Reactive Counter</title>
  </head>
  <body>
    <div class="text-center p-8">
      <h2>Simple Counter</h2>
      <div id="count-display">0</div>
      <button id="increment">+1</button>
      <button id="decrement">-1</button>
      <button id="reset">Reset</button>
    </div>
    <script src="counter.js"></script>
  </body>
</html>
```

```javascript
// counter.js
let count = 0;

function updateDisplay() {
  document.getElementById("count-display").textContent = count;
}

function setCount(newCount) {
  count = newCount;
  updateDisplay();
}

document.getElementById("increment").addEventListener("click", () => {
  setCount(count + 1);
});

document.getElementById("decrement").addEventListener("click", () => {
  setCount(count - 1);
});

document.getElementById("reset").addEventListener("click", () => {
  setCount(0);
});

updateDisplay(); // Show initial count
```

### Why This Matters

This pattern of updating data and displays is fundamental to modern web development. Frameworks like React use these same principles but with more features and better organization. Understanding reactivity will help you:

1. Write more maintainable code
2. Avoid bugs from forgetting to update displays
3. Build more complex interactive features
4. Understand modern web frameworks better

### Key Takeaways

1. Keep your data in one place
2. Use functions to update data
3. Automatically update the display when data changes
4. Never update displays directly - always go through your update functions

Remember: If you're updating a value that should be displayed on the screen, make sure you're using a proper update function that handles both the data and display changes!
