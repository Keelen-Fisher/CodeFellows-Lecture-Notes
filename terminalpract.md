# Practice in the Terminal

## Command Line-[What is it, how does it work and how do I get to one.](https://ryanstutorials.net/linuxtutorial/commandline.php)

- First, understand what Linux is and what it has: Linux has a graphical user interface and it works pretty much like the GUI's on other systems that you are familiar with such as `Windows` and `OSX`.

- A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

- Example: ![bash in terminal](Images/Example%20of%20command%20lines.png)

- Explanation:

      - Line 1 presents us with a prompt ( user@bash ). After that we entered a command (ls). Typically a command is always the first thing you type. After that we have what are referred to as command line arguments ( -l /home/ryan ). Important to note, these are separated by spaces (there must be a space between the command and the first command line argument also). The first command line argument ( -l ) is also referred to as an option. Options are typically used to modify the behaviour of the command. Options are usually listed before other arguments and typically start with a dash (-).

      - Lines 2 - 5 are output from running the command. Most commands produce output and it will be listed straight under the issuing of the command. Other commands just perform their task and don't display any information unless there was an error.
      
      - Line 6 presents us with a prompt again. After the command has run and the terminal is ready for you to enter another command the prompt will be displayed. If no prompt is displayed then the command may still be running (you will learn later how to deal with this).

## Basic Navigation-[An introduction to the Linux directory system and how to get around it.](https://ryanstutorials.net/linuxtutorial/navigation.php)

- In this section, the goal is to learn the basics of moving around the system. Many tasks rely on being able to get to, or reference the correct location in the system. As such, this stuff really forms the foundation of being able to work effectively in Linux.

- The first command to learn is `pwd`, which stands for Printing Working Directory. It tells you what your current or present working directory is.

- Next is `ls`, short for list. This shows the list of what is in the directory path that you are on at that exact moment.

- There are 2 types of paths we can use, absolute and relative. Whenever we refer to a file or directory we are using one of these paths. Whenever we refer to a file or directory, we can, in fact, use either type of path (either way, the system will still be directed to the same location).

- Absolute paths specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( / ). Relative paths specify a location (file or directory) in relation to where we currently are in the system. They will not begin with a slash.

- More About Paths:

  - `~ (tilde)` - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents
  - `. (dot)` - This is a reference to your current directory. eg in the example above we referred to Documents on line 4 with a relative path. It could also be written as ./Documents (Normally this extra bit is not required but in later sections we will see where it comes in handy).
  - `.. (dotdot)`- This is a reference to the parent directory. You can use this several times in a path to keep going up the hierarchy. eg if you were in the path /home/ryan you could run the command ls ../../ and this would do a listing of the root directory.

- In order to move around in the system we use a command called `cd`, which stands for change directory.

## More about Files-[Find out some interesting characteristics of files and directories in a Linux environment.](https://ryanstutorials.net/linuxtutorial/aboutfiles.php)

- **Linux is an Extension-less System**-A file extension is normally a set of 2 - 4 characters after a full stop at the end of a file, which denotes what type of file it is. The following are common extensions:

  - file.exe - an executable file, or program.
  - file.txt - a plain text file.
  - file.png, file.gif, file.jpg - an image.

- Other important concepts: Linux is case sensitive

## Manual Pages-[- Learn how to make the most of the Linux commands you are learning.](https://ryanstutorials.net/linuxtutorial/manual.php)

- man `<command>` - 
Look up the manual page for a particular command.
- man -k `<search term>` - 
Do a keyword search for all manual pages containing the given search term.
- /`<term>` - 
Within a manual page, perform a search for 'term'
- `n` -
After performing a search within a manual page, select the next found item.

## File Manipulation-[How to make, remove, rename, copy and move files and directories.](https://ryanstutorials.net/linuxtutorial/filemanipulation.php)

- In it's most basic form we can run `mkdir` supplying only a directory and it will create it for us.

- The command to remove a directory is `rmdir`, short for remove directory.

- `touch` is actually a command we may use to modify the access and modification times on a file (normally not needed but sometimes when you're testing a system that relies on file access or modification times it can be useful).

- `cp` stands for copy. There are many reasons why we may want to make a duplicate of a file or directory. Often before changing something, we may wish to create a duplicate so that if something goes wrong we can easily revert back to the original.

- To move a file we use the command `mv` which is short for move. It operates in a similar way to cp. One slight advantage is that we can move directories without having to provide the -r option.

- As with rmdir, removing a file is an action that may not be undone so be careful. The command to remove or delete a file is `rm` which stands for remove.

## Cheat Sheet-[A quick reference for the main points covered in this tutorial](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)
