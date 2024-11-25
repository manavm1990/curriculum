# Reactivity III: Event Delegation and Advanced State Management

In our previous lessons, we built a reactive counter with components and state management. Now we'll tackle two key concepts that will complete our journey to React: event delegation and batched updates.

## Opening Questions 🤔

- Our counter listens to all document clicks. Is there a better way?
- What happens when we need multiple rapid state updates?
- How do these patterns relate to modern frameworks like React?

## Event Delegation: A Better Way to Listen

Remember our current code:

```js
document.addEventListener("click", (event) => {
  if (event.target.id === "increment")
    state.setState({ count: state.getState().count + 1 });
});
```

Think of event delegation like a restaurant manager. Instead of having a waiter watch each table individually, one manager oversees a section of tables. Similarly, we can have one listener manage a group of buttons:

```js
const buttonContainer = document.querySelector("#button-container");
buttonContainer.addEventListener("click", (event) => {
  if (event.target.id === "increment")
    state.setState({ count: state.getState().count + 1 });
  else if (event.target.id === "decrement")
    state.setState({ count: state.getState().count - 1 });
});
```

## Advanced State Management: Batching Updates

Remember our bank analogy from the previous lesson? Sometimes you need to make multiple transactions at once. Instead of processing each one separately, banks batch them together for efficiency.

Let's enhance our state manager to support batching:

```js
export default (() => {
  let state = { count: 0 };
  const listeners = [];
  let isBatching = false;
  let pendingState = null;

  function notifyListeners() {
    listeners.forEach((listener) => listener(state));
  }

  return {
    getState() {
      return state;
    },
    setState(newState) {
      if (isBatching) {
        pendingState = { ...state, ...newState };
      } else {
        state = { ...state, ...newState };
        notifyListeners();
      }
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    startBatch() {
      isBatching = true;
    },
    endBatch() {
      if (pendingState) {
        state = pendingState;
        pendingState = null;
        notifyListeners();
      }
      isBatching = false;
    },
  };
})();
```

Now we can batch multiple updates:

```js
state.startBatch();
state.setState({ count: state.getState().count + 1 });
state.setState({ count: state.getState().count + 1 });
state.endBatch(); // Only one render!
```

## Putting It All Together

Here's our final, optimized counter:

```js
import Button from "./components/button";
import Count from "./components/count";
import state from "./state";

const app = document.querySelector("#app");

function render() {
  app.innerHTML = `
    ${Count(state.getState().count)}
    <div class="flex justify-center" id="button-container">
      ${Button("+1", "increment")}
      ${Button("-1", "decrement")}
    </div>
  `;
}

state.subscribe(render);
render();

document
  .querySelector("#button-container")
  .addEventListener("click", (event) => {
    state.startBatch();
    if (event.target.id === "increment")
      state.setState({ count: state.getState().count + 1 });
    else if (event.target.id === "decrement")
      state.setState({ count: state.getState().count - 1 });
    state.endBatch();
  });
```

## Moving Forward to React

Congratulations! You now understand:

- Component-based architecture
- State management
- Event delegation
- Batch updates

These are the exact same concepts React uses under the hood. When you start learning React, you'll see these patterns everywhere:

- React components (like our component functions)
- React state (like our state manager)
- React's event system (like our event delegation)
- React's automatic batching (like our batch updates)

You're ready for React! 🎉
