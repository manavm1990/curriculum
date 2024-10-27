---
sidebar_position: 1
---

# Recap: Data Types and References

## Create Data and Store It On the Heap

- All values in JavaScript (e.g., `"string"`, `23`, `true`, objects, arrays) are stored in the heap.
- Access to this data is managed through references.

## Create Primitive Data Types

- **Primitives** hold one discrete piece of data.
- Five key primitive data types:
  - **Number**: e.g., `23`, `1.99`, `-1000`
  - **String**: e.g., `"Hello, World!"`, `"Manav"`
  - **Boolean**: `true`, `false`
  - **Undefined**: A variable declared but not assigned a value.
  - **Null**: A variable explicitly assigned a 'nothing' value.

## Bind Data to Variable

- Variables are references to values in memory.
- Use `const` for constants and `let` for variables that may be reassigned.
- Avoid using `var`.

## `undefined` and `null`

- **`undefined`**: Absence of any value. Commonly seen when a variable is declared but not assigned.
- **`null`**: Deliberate assignment of a 'nothing' value.
- **'not defined'**: An error indicating a variable has not been declared at all.

This lesson covers the basics of data types, variable binding, and the differences between `undefined`, `null`, and 'not defined' in JavaScript.
