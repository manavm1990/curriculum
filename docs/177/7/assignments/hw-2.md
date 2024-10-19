---
sidebar_position: 1
---

# HW 7-2

Be sure to get the GitHub Classroom link from Brightspace! Be sure to review the `README.md`, as usual. But, generally, the directions are the same. The 🔗 should 'fork' the template to your GitHub account. Then, you clone it into a non-repo directory, `cd`, `npm i`, etc. etc. etc.

Now, create a file called `utils.js` in the `src` directory.

You will be writing a separate function for each of the following tasks. Yes, Copilot makes these types of tasks almost dead simple, but please make sure that you review and understand what's going on with these functions!

In each of these cases, you can manually test your function by running `node src/utils.js` from your terminal. Naturally, make sure that you are in the correct directory when you run this command.

1. Write a function called: `convertMiToKm`. This takes in a number of miles and returns the equivalent number of kilometers. 1 mile is equal to 1.60934 kilometers. To manually test this, try: `console.log(convertMiToKm(1));` which should return `1.60934`.
1. Write a function called: `calculateAreaOfCircle`. This takes in a radius and returns the area of a circle. The formula for the area of a circle is `π * r^2`. You can use `Math.PI` for the value of π. To manually test this, try: `console.log(calculateAreaOfCircle(1));` which should return `3.141592653589793`.
1. Write a function called: `getLetterGrade`. This takes in a number grade and returns the letter grade. The grading scale is as follows:
   - 90-100: A
   - 80-89: B
   - 70-79: C
   - 60-69: D
   - 0-59: F
     To manually test this, try: `console.log(getLetterGrade(90));` which should return `A`.
1. Write a function called: `getAverage`. This takes in an array of numbers and returns the average of those numbers. To manually test this, try: `console.log(getAverage([1, 2, 3, 4, 5]));` which should return `3`.

So, there are 4 total functions to write. Be sure to:

> commit early, commit often.

That means a minium of 4 commits. One for each function. And, as always, be sure to push your changes to GitHub. As long as you push your code, there is nothing to submit on BrightSpace.
