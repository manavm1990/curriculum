# Recap: Reactivity in Web Development

In this recap, we'll summarize the key concepts covered in the previous lessons on reactivity.

## Introduction to Web Reactivity

### The Counter Example

Reactivity in web development means making your webpage automatically update when data changes. We explored this concept through a simple counter example.

### Key Concepts

1. **Single Source of Truth**: Keep your data (state) in one place.
2. **Display Update Function**: Use a function to handle displaying the data.
3. **State Update Function**: Use a function to handle changing the data.

### Common Mistakes to Avoid

- **Don't** update the count directly.
- **Do** use the state update function.
- **Don't** update the display directly.
- **Do** use the display update function.

## Reactivity II: Getting Closer to React

### Function Components

We introduced function components as reusable UI factories that output HTML.

### Understanding State Management

#### Immediately Invoked Function Expression (IIFE)

An IIFE is a function that runs immediately after it's defined. It helps create a private scope for state management.

#### Why Use an IIFE?

IIFEs create a private space for state, ensuring that the state is not accessible from the global scope. This helps maintain data privacy and encapsulation.

### Reactive Counter State Management

We demonstrated how to manage state using an IIFE and closures. The state is kept private, and only specific methods can interact with it.

### Putting It All Together

We combined function components and state management to build a reactive counter. The counter updates the display and state consistently using the defined methods.

## Conclusion

Understanding these patterns forms the foundation of modern frameworks like React and Vue. It helps in debugging state management issues, building maintainable applications, and understanding React's architecture.
