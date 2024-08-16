---
sidebar_position: 2
---

# Terminal/Command Line

The terminal, also known as the command line or 🐚, is a powerful tool that allows you to interact with your computer using text commands. It is essential for developers as it enables automation and efficient execution of complex operations.

As developers, we tend to use the terminal as our command center. It provides a more efficient way to control our computers through text commands, allowing us to perform tasks faster than using the graphical user interface (GUI).

Anything that can be done in the GUI can also be done in the terminal. It allows us to create, move, and delete files, as well as write scripts to automate tasks and install software.

Having a good understanding of the terminal can make you more productive and efficient as a developer, enabling you to solve problems quickly.

The terminal itself doesn't do much without a shell like Bash, which interprets and executes commands. We will introduce a few basic Bash commands that you can use in the terminal.

## Introduction to Bash Commands in the Terminal

### Change Directory - `cd`

The `cd` command takes you to your home directory, denoted by `~`. It is useful when you are lost or want to start over. To navigate outside the home directory, use `cd` followed by a space and the directory name as the argument.

For example, `cd Documents` takes you to the `Documents` directory, similar to double-clicking on the `Documents` folder in the GUI.

Remember to include a space as the delimiter between the command and the argument. You can save time and avoid typos by typing the first few characters and pressing `Tab` for autocomplete.

To go back up one level, use `cd ..`, which acts like a 'back button' or clicking on the 'Up One Level' folder icon in the GUI.

### List Directory - `ls`

The `ls` command lists all files and directories in the current directory, similar to opening a folder and viewing its contents.

### Make Directory - `mkdir`

Use `mkdir Code` to create a new directory called `Code`, similar to right-clicking in a folder and creating a new folder. Make sure to navigate to your home directory with `cd` before creating the new directory.

Consistency in capitalization, like using `Code` to match `Documents` and `Pictures`, is a good practice for better coding habits.

### Get a History of Commands - `history`

The `history` command displays a list of all the commands you have run in the terminal, similar to viewing your browser history. It can be useful for running previous commands again.

You can navigate through your command history using the up and down arrow keys.

#### Terminal Videos

To gain a better understanding of the terminal, follow along with the videos below. If you are on Mac, use Warp Terminal (press 'command' + 'space' and search for "Warp"). If you are on Windows, use the GitBash terminal (press the Windows key and search for "GitBash").

<div class="sp-embed-player" data-id="cZVI3oVJ1q0">
<script src="https://go.screenpal.com/player/appearance/cZVI3oVJ1q0"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVI3oVJ1q0?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

<div class="sp-embed-player" data-id="cZVYFlVJtf2">
<script src="https://go.screenpal.com/player/appearance/cZVYFlVJtf2"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYFlVJtf2?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

<div class="sp-embed-player" data-id="cZVYFrVJth1">
<script src="https://go.screenpal.com/player/appearance/cZVYFrVJth1"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVYFrVJth1?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

Note that in the above video, I mention a podcast and Git. Disregard this.

## Exercises

### Navigate to Directories

Open your terminal and navigate to your home directory using the `cd` command.
From your home directory, navigate to the `Documents` directory.
Try navigating to a directory of your choice and then return to your home directory.

### List Files and Directories

Use the `ls` command to list all files and directories in your home directory.
Try using ls `-a` to list all files, including hidden ones.

Try using ls `-l` to list files in long format.

Try using both `-a` and `-l` together.

### Create and Delete Files

Use the `touch` command to create a new file called `test-file.txt` in your home directory.
`rm test-file.txt`.

## Quiz Questions

What is the purpose of the `mkdir` command?

a) To create a new file
b) To remove a directory
c) To create a new directory
d) To list files and directories

How do you list all files, including hidden ones, in a directory?

a) `ls -h`
b) `ls -l`
c) `ls -a`
d) `ls -all`

What does the `rm` command do?

a) Removes a directory
b) Renames a file
c) Removes a file
d) Moves a file

What is the delimiter in the command `cd Documents`?

a) `cd`
b) `Documents`
c) The space between `cd` and `Documents`
d) The `~` symbol

Earlier, you saw `-a` and `-l` with the `ls` command. What are `-a` and `-l` called? Research this to find out.

---

Once you have completed the above exercises and quiz, please notify your instructor. While you are waiting for your friends continue to explore the terminal with one (or both) of the following resources:

## Additional Resources

1. [MDN Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
1. [Traversy Media Command Line Crash Course](https://youtu.be/uwAqEzhyjtw?si=HMRIP0WZdwBQAHZh)

Note that the above resources are optional and not required for the course. They are provided to fill up your leftover time. You should utilize them while you wait for your friends in lieu of just sitting around and/or playing games on your phone. 🙅‍♀️

If you do find some points of interest in the resources above, please notify your instructor for possible bonus points.
