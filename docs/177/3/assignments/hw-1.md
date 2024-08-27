---
sidebar_position: 1
---

# Homework 2-1: HTML-CSS Review

As a pre-requisite for this course, you were to have covered the basics of HTML and CSS. This course will not be teaching you HTML and CSS from scratch, but rather, we will be building on what you already know.

You'll be using a code repository template. If you've had other programming courses, then you may have noticed that most projects don't just start with a whole lot of nothing. Instead, they are usually some starter files.

Well, the same will be true for this assignment.

## Why Use a Template?

As you may already know, HTML and CSS are very loose. Pretty much any code written will render somehow in the browser. But what about making sure that our code follows conventions and best practices used by many development teams? How do we keep our code tidy and make sure that it's compatible with as many different browser's possible? How can we be accessible, idiomatic, semantic and generally learn good patterns? Well, that's where tools such as linting can help us out.

You will be provided with a template repo that will be working with you to provide features such as:

- Hot Reloading - make changes to your code and watch them appear immediately appear in the browser!
- Auto Formatting - your code will be styled by [Prettier](https://prettier.io/docs/en/why-prettier). It will automatically indent itself and such as soon as you leave the file.
- Code Quality - As you work, you will notice various errors popping up, especially in your CSS 💄. These are coming from [StyleLint](https://stylelint.io/). A linter is a code quality tool that:

### Linters

> ...helps you avoid errors and enforce conventions.
> -StyleLint

![StyleLint Example Error](/img/stylelint-example.png)

Do also note that you can hover over each of these errors and a link to the documentation will appear. This will help you understand why the error is there and how to fix it.

![StyleLint Error Window with Link](/img/stylelint-link.png)

## Getting Started

It's time to get to work! Start by utilizing the [link to this assignment from GitHub Classroom.](https://classroom.github.com/a/unsb5KD6) Then, checkout the `README.md` file in the repository for instructions on how to get started.

**Consider that `README` as a more in-depth continuation of this document/lesson. It's a critical read!** You may even want to get started on that now before reading the rest of this.

## What Am I Building?

You will be building a simple webpage that will be used to showcase your skills in HTML and CSS. Consider turning what you did in MarkDown assignment into a webpage. That is, it can be your bio.

You could try to port over an assignment from another course.

## Write Quality Code (Pay Attention to StyleLint and Details)

You will be graded on the following:

- HTML Structure
- CSS Styling
- Accessibility
- Semantic HTML

Mainly, if you just make sure that you are adhering to any/all of the errors that StyleLint is throwing at you, you should be good to go. Also, be mindful of the HTML structure and make sure that it is semantic. Keep in mind what was mentioned in the podcast from the previous week.

In addition, here are some points to keep in mind based on previous submissions from students:

- [Avoid Using Multiple `<h1>` Elements on One Page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page)

> Note: Do not use `<br>` to create margins between paragraphs; wrap them in `<p>` elements and use the CSS margin property to control their size.
> [-MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)

> The `<div>` element should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate.
> [-MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#usage_notes)

## Deliverables

First and foremost, as you work, you should be tracking your changes with Git. As you make a small change (commit early, commit often), write a commit message to reflect that work.

For example, if you are working on the header of your page, you could write a commit message like: `git commit -m "Add header to the page"`. This will help you keep track of your work and will also help you if you need to go back to a previous version of your code.

Note that Git commit messages should be succinct and descriptive. They should be written in the present tense and should describe what the commit does, not what you did. Case and point, `git commit -m "Add header to the page"`, not `git commit -m "I added a header to the page"`. Note that we wrote `"Add"` instead of `"Added"`.

Record a video walkthrough of your code and submit it to the assignment on Brightspace. Explain what you did and why you did it. Show off your commit history with `git log`. This will be a great way to show off your work and to practice your communication skills.

---

## Optional Videos

If you're looking for some additional help, you can check out the following videos where I demo some HTML and CSS basics:

<div class="sp-embed-player" data-id="cZVtr0VJdhp">
<script src="https://go.screenpal.com/player/appearance/cZVtr0VJdhp"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVtr0VJdhp?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

<div class="sp-embed-player" data-id="cZVtrmVJdie">
<script src="https://go.screenpal.com/player/appearance/cZVtrmVJdie"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVtrmVJdie?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

<div class="sp-embed-player" data-id="cZVt3qVJdjJ">
<script src="https://go.screenpal.com/player/appearance/cZVt3qVJdjJ"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVt3qVJdjJ?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

<div class="sp-embed-player" data-id="cZVu2KVJdLs">
<script src="https://go.screenpal.com/player/appearance/cZVu2KVJdLs"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVu2KVJdLs?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>
