---
sidebar_position: 2
---

# Getting Started with Git and GitHub

We will be using Git and GitHub to manage our code. Git is a **version control system (VCS)** that allows you to track changes in your code. GitHub is a platform that allows you to host your code and collaborate with others.

## We Use Git and GitHub to Track Changes to Our Projects Over Time

To help us maintain, back up, and share our codebases, we're going to use `git` (the command-line tool) and GitHub (the online repository). These tools are fundamental parts of the web developer's workflow, and you'll be using them every day for the rest of your programming career!

Git is a version control system that allows you to track changes to your code over time. It allows you to save versions of your code and go back to them if you need to. It also allows you to collaborate with others on your code.

Git works a bit like a time machine, in the sense that you'll be able to revert to any saved state within a directory. So if you mangle your site's directory structure, you can always use Git to revert back to simpler times. The important things to understand about git specifically:

1. This is a CLI utility, so get ready for lots of text. All of our important files when programming will be text, so its only natural that we'd be navigating between save states (called 'commits') using text as well.
2. Arbitrarily or automatically saving code is NOT a feature of git, and it shouldn't be. You only want to save meaningful chunks of code (e.g. a feature), not broken pieces here and there. Otherwise, there's no way to revert back to a useful save-state!
3. Because of point #2, 'saving' your progress with git is handled a bit differently. You are in charge of 'staging' your commits, and 'committing' changes only when you are ready. This is a good thing, as it forces you to think about what you're saving and why.

Git is a version control system that tracks changes to the files in our project over time. The concept is that we take 'snapshots' of our project after completing a 'logical unit of work', and attach a clear `commit` message that describes what was just completed. This is typically done in the _imperative tense_ by convention (e.g. 'Add navigation menu' or 'Fix non-functional in login form.', etc.).

Verify that you have `git` installed by typing `git --version` into your terminal. You should see some numbers (e.g. `git version 2.39.1`).

With that command, you just told your terminal that you want to run a `git` command, and that you are using a special flag, `--version`.

## Git vs GitHub

Once we have a git repository on our local computer, we are free to use Git as needed to track changes to our code. However, we can also use GitHub to host our code online. This allows us to collaborate with others (e.g. your instructor) and keep a backup of our code. We can also utilize the GitHub repository to deploy our code to the web.

Again, Git is a program installed on our local computers. We work in our local repository, and we can use Git to track changes to our code. GitHub is a website that hosts our code online. We can push our code to GitHub to collaborate with others and keep a backup of our code.

## Some Basic Git Commands

Note: Don't try to run these commands just yet. That will come later in the videos. This is just a preview of what's to come.

We installed git into our terminal emulator. That's why each of these commands starts with `git` - we need to let our terminal emulator know that we want to access a specific program (Git).

- `git status` - Display status of current repo, including files ready to commit, modified files, and untracked files.
- `git add fileName` - Add file to 'staging' area, ready to be committed.
  - `git add .` - Add all files in the current directory to the staging area.
  - `git add -u` - Add all modified files to the staging area. Don't add any newly created files that aren't already being tracked.
- `git commit -m "Write a message starting with an imperative tense verb."` - Save a 'snapshot' of your repo with message describing changes
- `git push` - Add local repo's committed changes to GitHub repo
- `git pull` - Add changes from GitHub repo to local repo
- `git log` - Log all commits for the repo
- `git init` - Initialize a git repo in an existing folder
- `git diff fileName` - Display a file's changes from previous commit

We installed `git` into our terminal emulator. That's why each of these commands starts with git - we need to let our terminal emulator know that we want to access a specific program, in this case, git and then insert a followed by the specific git command we want, followed by any other flags (stuff that has - in front of it) followed by any other arguments that we need to execute the command. Example: git commit -m "Initial commit" - access git program, use the commit command, pass a 'message flag', pass the actual 'message' as an argument inside of "".

## Git Configuration 🔧

⚠️ The first time you run `git commit`, pay close attention to your output. You may need to configure `user.name` and `user.email`.

Note: Feel free to run the following commands in your terminal to configure your Git settings. Replace the placeholders with your actual information.

`git config --global user.name "FirstName LastName"`
`git config --global user.email "your.email@example.com"`. Use the ✉️ that is associated with your GitHub account.

You can check all of your configuration settings by typing: `git config --list`.

Another important configuration is to set VS Code as your default editor. You can do this by running the following command:

`git config --global core.editor "code --wait"`. This will open VS Code when you run `git commit`. For instance, if you forget to add a commit message, you can type it in VS Code and save the file.

You should definitely follow along with the videos on this page, take 🎶 and ask questions. This is critical information that we will be using for the rest of your course, and likely for the rest of your career if move on to working as a developer or engineer.

## The Terminal, VS Code and Git

In these videos, we are creating a new repository on GitHub and clone it to our local machine. However, in most cases, you will be cloning an existing repository to your local machine.

As we proceed through these videos, the following illustration may help. We are using the terminal to interact with Git and VS Code to write our code. We will be using Git to track changes to our code and push them to GitHub.

![Git working directory, staging area and repository](/img/git-add-commit.png).

<div class="sp-embed-player" data-id="cZVYFBVJt1O">
<script src="https://go.screenpal.com/player/appearance/cZVYFBVJt1O"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYFBVJt1O?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

<div class="sp-embed-player" data-id="cZVYFdVJtiD">
<script src="https://go.screenpal.com/player/appearance/cZVYFdVJtiD"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYFdVJtiD?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

This video is just a quick re-introduction of VS Code.

<div class="sp-embed-player" data-id="cZVYqVVJtjj">
<script src="https://go.screenpal.com/player/appearance/cZVYqVVJtjj"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYqVVJtjj?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

And we delve further into VS Code and, more importantly, Git.

<div class="sp-embed-player" data-id="cZVYqoVJtQD">
<script src="https://go.screenpal.com/player/appearance/cZVYqoVJtQD"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYqoVJtQD?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

## Additional Git Commands

### `git commit`

In order to track changes to the code over time, as we work, we need to commit our changes. This is like saving a version of the code. We can then go back to this version if we need to.

<div class="sp-embed-player" data-id="cZVYq3VJtQd">
<script src="https://go.screenpal.com/player/appearance/cZVYq3VJtQd"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYq3VJtQd?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

### Connecting to GitHub

Note that GitHub is a cloud-based repository service that just affords a place to store repos and collaborate - it is not directly associated with `git`. Any directory on our computer that is a Git repository (contains the hidden `.git` directory) could just be used locally. We could send this entire folder to someone (including the hidden '.git') and they could access everything that way and/or we could set up an FTP server or even build our own 'private' GitHub - obviously these alternatives are far less convenient than just using GitHub. 😃

We can create an empty repo on GitHub and then connect our local repo to it. This allows us to push our code to GitHub and collaborate with others.

<div class="sp-embed-player" data-id="cZQVbyVRqpC">
<script src="https://go.screenpal.com/player/appearance/cZQVbyVRqpC"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZQVbyVRqpC?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

Upon creating that repo on GitHub, we want to...push an existing repository from the command line. For example:

```bash
git remote add origin https://github.com/manavm1990/sturdy-engine.git
git branch -M main
git push -u origin main
```

The first command tells 🐚 that we want to access the `git` program. We want to run the `remote` command. We want to `add` a `remote` to our local repo. We are going to call this `remote` `origin` (this is a convention, but you could call it anything). The URL is the URL of the repo that we just created on GitHub. The second command tells 🐚 that we want to access the `git` program. We want to run the `branch` command. `-M` is a 🚩 that 'moves' the `branch` to the `main` `branch`. Finally, we are pushing our local repo and its entire history on the `main` branch to the aforementioned `origin` on GitHub.

Note that we will not ordinarily need to run these commands. We will be cloning existing repos to our local machine. This is just a demonstration of how to connect a local repo to a GitHub repo.

### `git push`

Once we have committed our changes, we need to push them to GitHub. This is like saving our changes to the cloud. It provides a backup of our code and allows us to collaborate with others.

<div class="sp-embed-player" data-id="cZVYqpVJtXD">
<script src="https://go.screenpal.com/player/appearance/cZVYqpVJtXD"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYqpVJtXD?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

## GitHub Features

GitHub is the de facto platform for hosting code and collaborating with others. It has many features that make it easy to work with others and manage your code.

<div class="sp-embed-player" data-id="cZVYY1VJtIh">
<script src="https://go.screenpal.com/player/appearance/cZVYY1VJtIh"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYY1VJtIh?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

## Line Endings

If you using Windows, you may run into issues with line endings. This video explains how to fix this issue. If you are on Mac, you can skip this video.

<div class="sp-embed-player" data-id="cZVTfgVJpzF">
<script src="https://go.screenpal.com/player/appearance/cZVTfgVJpzF"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVTfgVJpzF?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

## Additional Resources

Again, this part is not required, but if you are all finished with the above materials, you can [explore a bit further](https://docs.github.com/en/get-started/using-git/about-git) instead of just wasting time. Note any interesting points that you pick up and inform the instructor for possible bonus points.
