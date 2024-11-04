---
sidebar_position: 2
---

There are [loads of other functions available to anything that's based upon the Array prototype.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) We've seen `map`, `filter`, and `reduce`, and these (especially `map`) will easily cover 80% or more of your realistic use cases.

We'll add just a couple more to our arsenal.

# `sort`

The `sort` function is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```javascript
const numbers = [4, 2, 5, 1, 3];

const sorted = numbers.sort();
// [1, 2, 3, 4, 5]
```

If you want to sort by something other than the default, you can pass a comparison function to `sort`. This function should return a negative number if the first argument should come before the second, a positive number if the first argument should come after the second, and zero if they are equal.

## Imperative Sorting

```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];

for (let i = 0; i < products.length; i++) {
  for (let j = i + 1; j < products.length; j++) {
    if (products[i].price > products[j].price) {
      let temp = products[i];
      products[i] = products[j];
      products[j] = temp;
    }
  }
}

console.log(products);
// [
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
//   { name: "Laptop", price: 1000 }
// ]
```

### Imperative Logic Walkthrough

1. The outer loop iterates over each element in the products array.
1. The inner loop compares the current element with the subsequent elements.
1. If the current element's price is greater than the next element's price, they are swapped.
1. This process continues until the array is sorted in ascending order by price.

😕 😅

Imperative sorting is generally a bad idea because it is more error-prone and harder to read compared to using built-in array methods. The logic involves nested loops to compare and swap elements, which can be cumbersome and less efficient.

## Declarative Sorting

```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];

const sortedProducts = products.sort((a, b) => a.price - b.price);

console.log(sortedProducts);
// [
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 750 },
//   { name: "Laptop", price: 1000 }
// ]
```

### Declarative Logic Walkthrough

1. The `sort` method is called on the products array.
1. The comparison function `(a, b) => a.price - b.price` is passed to the `sort` method.
1. The comparison function subtracts the price of `b` from the price of `a`.
1. If the result is negative, `a` comes before `b`; if positive, `b` comes before `a`; if zero, the order remains unchanged.

Declarative sorting using the `sort` method with a comparison function is more concise and readable. It abstracts the sorting logic into a single line, making it easier to understand and maintain.

## `includes`

The `includes` method checks if an array includes a certain element and returns `true` or `false` accordingly.

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3));
// true

console.log(numbers.includes(6));
// false
```

The `includes` method is useful for checking if an array contains a specific element without needing to iterate through the array manually.

## `forEach`

`forEach` is similar to `map`, but it doesn't return a new array. It executes a provided function once for each array element.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  // Perform an action on each element. This uses side effects. It's impure.
  console.log(number);
});
// 1
// 2
// 3
// 4
// 5
```

In other words, you would not do `const doubled = numbers.forEach((number) => number * 2);` because `doubled` would be `undefined`. Use `forEach` when you want to perform an action on each element of an array without creating a new array. This might be useful when working with the DOM on occasion.

## Additional Array Methods to Explore

**Note:** The images below were taken from Lydia Hallie (Avocoder).

![`sort` method](/img/sort.png)
![`every`](/img/every.png)
![`find`](/img/find.png)
![`findIndex](/img/find-index.png)
![`some`](/img/some.webp)
