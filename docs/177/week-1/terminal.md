---
sidebar_position: 2
---

# Terminal/Command Line

The terminal is a powerful tool that allows you to interact with your computer using text commands. It is a text-based interface that allows you to interact with your computer's operating system. The terminal is also known as the command line or 🐚.

It allows you to perform a wide range of tasks, from navigating your file system to running scripts and programs. It is an essential tool for developers, as it allows you to automate tasks and perform complex operations quickly and efficiently.

The video below will introduce you to the terminal and show you how to use some basic commands.

## Introduction to Bash Commands in the Terminal

The terminal by itself doesn't do much, just like a computer without any software or operating system. Fortunately, akin to an operating system, the terminals that you installed (Warp or GitBash) include Bash, a shell that interprets commands and executes them. We'll introduce a few basic commands that you can use in the terminal.

### Change Directory -`cd`

By itself it takes us to our home directory, denoted by a `~`. This is a great command to remember if you are ever lost or confused about where you are in the terminal. Just return home and start over.

However, we can also use it to navigate to other directories. For example, `cd Documents` will take us to the `Documents` directory. The GUI equivalent would be like if we double clicked on the `Documents` folder graphic.

Here, `cd` is the command and `Documents` is the argument. Arguments are the values that we pass to a command to tell it what to do. If you have some programming experience, these might sound similar to functions and their arguments.

While we are being technical, we will add that the space in between the command and the argument is important. If you don't have a space, the terminal will not know what you are trying to do. It's known as a **delimiter**. It separates the command from the argument.

**Hot Tip:** Instead of typing out the entire directory name, just type the first few characters and then press the `Tab` key. The terminal will autocomplete the directory name for you. This is a great way to save time and avoid typos.

Finally, how do we go up a directory? We can use `cd ..`. This is like if we were to click on the folder icon that says, "Up One Level".

### List Directory - `ls`

This command will list all the files and directories in the current directory. It's like if you were to open a folder and see all the files and folders inside.

### Make Directory - `mkdir`

This command will create a new directory called `Code`. It's like if you were to right-click in a folder and create a new folder. Note that you'll want to do `cd` first to make sure that you are in your home directory before creating this new `Code` directory.

### Get a History of Commands - `history`

This command will show you a list of all the commands that you have run in the terminal. It's like if you were to look at your browser history to see all the websites that you have visited. This can also be useful if you want to run a command again that you have run in the past.

Note that you can also use the up and down arrow keys to navigate through your command history.

#### Terminal Video

You'll want to follow along with the video below to get a better understanding of the terminal. Remember that if you are on Mac, you are using Warp Terminal (do 'command' + 'space' and search for, "Warp"). If you are on Windows, you are using the GitBash terminal (press the Windows key and search for, "GitBash").

<div class="sp-embed-player" data-id="cZVI3oVJ1q0">
<script src="https://go.screenpal.com/player/appearance/cZVI3oVJ1q0"></script>
<iframe width="100%" height="100%" style={{border: "0", width: "100%",
height: "100%"}}
scrolling="no"
src="https://go.screenpal.com/player/cZVI3oVJ1q0?width=100%&height=100%&ff=1" allowfullscreen="true"></iframe></div>

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

Earlier, you saw `-a` and `-l` with the `ls` command. What are `-a` and `-l` called? Research this and/or use an AI service like Warp Terminal to find out.

---

Once you have completed the above exercises and quiz, please notify your instructor. While you are waiting for your friends continue to explore the terminal with one (or both) of the following resources:

## Additional Resources

1. [MDN Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
1. [Traversy Media Command Line Crash Course](https://youtu.be/uwAqEzhyjtw?si=HMRIP0WZdwBQAHZh)

Note that the above resources are optional and not required for the course. They are provided to fill up your leftover time. You should utilize them while you wait for your friends in lieu of just sitting around and/or playing games on your phone. 🙅‍♀️

If you do find some points of interest in the resources above, please notify your instructor for possible bonus points.

<!-- TODO: Create more lecture and video content!
## Additional Bash Commands

Now that you have learned some basic Bash commands, it's time to explore a few more useful commands. Here are some suggestions for your next steps:

### Copy Files - `cp`

The `cp` command allows you to copy files from one location to another. It's like if you were to make a duplicate of a file. You can use it in the following format: `cp source_file destination_file`. Try copying a file from one directory to another using the `cp` command.

### Move or Rename Files - `mv`

The `mv` command is used to move or rename files. It's like if you were to pick up a file and place it in a different folder or give it a new name. You can use it in the following format: `mv source_file destination_file`. Try moving or renaming a file using the `mv` command.

### Remove Files or Directories - `rm`

The `rm` command is used to remove files or directories. It's like if you were to delete a file or folder. Be careful when using this command, as it permanently deletes the files or directories. You can use it in the following format: `rm file_or_directory`. Try removing a file or directory using the `rm` command.

### View File Contents - `cat`

The `cat` command is used to view the contents of a file. It's like if you were to open a file and read its contents. You can use it in the following format: `cat file`. Try viewing the contents of a file using the `cat` command.

### Search for Files or Text - `find` and `grep`

The `find` command is used to search for files or directories based on specific criteria, such as name, size, or modification time. It's like if you were to search for a file in a folder. You can use it in the following format: `find directory -name filename`. The `grep` command is used to search for specific text within files. It's like if you were to search for a specific word in a document. You can use it in the following format: `grep search_term file`. Try using the `find` and `grep` commands to search for files or text.

Remember to practice these commands in your terminal to reinforce your learning. Experiment with different options and arguments to explore their full capabilities.
-->
