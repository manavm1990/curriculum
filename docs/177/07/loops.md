---
sidebar_position: 3
---

# Loops

![➿s run code over and over again](/img/loop.png)

## `for`

If we want to run something a specific number of times, we can use `for`. `for` usually needs 3 pieces of information to run 🏃🏽‍♂️:

1. Where do you want to start? We can use `let` to create a _variable_ to keep track of this: `let i = 0;` (`i` is just a made up name).
2. When do you want to end? We can set some _conditional_: `i <= 10;` Keep going until `i` reaches `10` (_boolean_).
3. How much do you want to _increment_ by each time? If we don't update `i`, we'll never reach `10`, and our program will be stuck in an infinite loop. So, to increase `i` by `1` each time, we can do: `i++`. This will throw out the current _value_ of `i` add `1`, and _assign_ that new _value_ to `i`.

```js
// for (some initial condition; some ending condition; some increment interval)
for (let i = 0; i <= 10; i++) {
  // Do something
}
```

Note the `i`. This is short for **index,** or something that keeps track of the count. We are counting from `0` to `11` here. Why `11`? Because when we get to `10`, we are still meeting the condition `i <= 10`. So, we need to go one more time to break the loop.

It's a common convention to use `i` as the variable name in a `for` loop. But, you can use any name you want. Just make sure it makes sense and is easy to understand.

```js
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

Notice the similarity between this syntax and what we saw with `if`. Only, we must always use `{}` with a `for` loop. Recall that in an `if`, we only need `{}` if we have more than one line of code or statement to run.

### On `let`

Recall that we normally use `const` to declare a variable. But, in this case, we use `let` because we want to _reassign_ `i` each time the loop runs. If we used `const`, we'd get an error.

## `while`

If we don't know how many times we want to run something, we can use `while`. `while` only needs one piece of information to run 🏃🏽‍♂️.

![`while` to increment to `10`](/img/while.png)

While the number has a value that’s lower than `10`, the statement gets executed. The statement is `myNumber++`, which increases the value of myNumber on every execution. The last number where the condition would return `true`, is when `myNumber` equals to `9`. `myNumber` then gets incremented one more time, which makes it `10`.

```js
let i = 0;

while (i <= 10) {
  // DO SOMETHING
  i++;
}
```

Again, since we need to keep replacing the value of `i` as we increment, we use `let`.

### `++`

`i++` is a shorthand way of writing `i = i + 1`. It's a common pattern in programming to increment a value by `1`. Similarly, `i--` is a shorthand way of writing `i = i - 1`.

So, we are saying, "Take the current value of `i`. Throw it out. Add `1`. Assign that new value to `i`."
