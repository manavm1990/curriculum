---
sidebar_position: 1
---

# Homework 4-1: HTML-Tailwind CSS

You'll be using a code repository template. If you've had other programming courses, then you may have noticed that most projects don't just start with a whole lot of nothing. Instead, they are usually some starter files.

Well, the same will be true for this assignment.

## Why Use a Template?

As you may already know, HTML and CSS are very loose. Pretty much any code written will render somehow in the browser. But what about making sure that our code follows conventions and best practices used by many development teams? How do we keep our code tidy and make sure that it's compatible with as many different browser's possible? How can we be accessible, idiomatic, semantic and generally learn good patterns? Well, that's where tools such as linting can help us out.

You will be provided with a template repo that will be working with you to provide features such as:

- Hot Reloading - make changes to your code and watch them appear immediately appear in the browser!
- Auto Formatting - your code will be styled by [Prettier](https://prettier.io/docs/en/why-prettier). It will automatically indent itself and such as soon as you leave the file.

## Getting Started

Make sure that you have used the GitHub CLI to authenticate your terminal with GitHub. If you haven't, you can do so by running `gh auth login`, and following the prompts.

Start by utilizing the [link to this assignment from GitHub Classroom.](https://classroom.github.com/a/GPJ3PEk5) Then, checkout the `README.md` file in the repository for instructions on how to get started.

**Consider that `README` as a more in-depth continuation of this document/lesson. It's a critical read!** You may even want to get started on that now before reading the rest of this.

## What Am I Building?

You will be building a simple webpage that will be used to showcase your skills in HTML and CSS. Consider turning what you did in MarkDown assignment into a webpage. That is, it can be your bio.

You could also try to port over an assignment from another course. You would need to strip out all of the existing CSS and replace it with Tailwind CSS. This will be a good exercise in learning how to use Tailwind CSS.

## Write Quality Code

You will be graded on the following:

- HTML Structure
- Use of Tailwind CSS
- Accessibility
- Semantic HTML

Be mindful of the HTML structure and make sure that it is semantic. Keep in mind what was mentioned in the podcast from the previous week.

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
