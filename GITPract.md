# Git Practice [Link:](https://learngitbranching.js.org/)

# ***Main***

## 2.0

### 2.3: The "~" operator

- You can directly reassign a branch to a commit with the -f option. So something like: ***git branch -f main HEAD~3***/ moves (by force) the main branch to three parents behind HEAD.

### 2.4: Reversing Changes in Git

- There are two primary ways to undo changes in Git -- one is using git reset and the other is using git revert. We will look at each of these in the next dialog. git reset reverses changes by moving a branch reference backwards in time to an older commit. In this sense you can think of it as "rewriting history;" git reset will move a branch backwards as if the commit had never been made in the first place.

      - EX: ***git reset HEAD~1***

- In order to reverse changes and share those reversed changes with others, we need to use git revert. EX: git revert HEAD

## 3.0

### 3.1 Cherry-Pick Intro

- The first command in this series is called git cherry-pick. It takes on the following form:

      - git cherry-pick <Commit1> <Commit2> <...> - ***It's a very straightforward way of saying that you would like to copy a series of commits below your current location (HEAD).**
      - Another example: ***git cherry-pick C2 C4***

### 3.2 Interactive Rebase Intro

- All interactive rebase means Git is using the rebase command with the -i option. If you include this option, git will open up a UI to show you which commits are about to be copied below the target of the rebase. It also shows their commit hashes and messages, which is great for getting a bearing on what's what. For "real" git, the UI window means opening up a file in a text editor like vim. You can choose to keep all commits or drop specific ones. When the dialog opens, each commit is set to be included by the pick button next to it being active. To drop a commit, toggle off its pick button.

      - Example: ***git rebase -i HEAD~4***

## 4.0 Locally stacked commits

### 4.1 Grabbing Just 1 Commit

### 4.2 Juggling Commits

- Real Career example: Here's another situation that happens quite commonly. You have some changes (newImage) and another set of changes (caption) that are related, so they are stacked on top of each other in your repository (aka one after another).

- The tricky thing is that sometimes you need to make a small modification to an earlier commit. In this case, design wants us to change the dimensions of newImage slightly, even though that commit is way back in our history!!

  - We will re-order the commits so the one we want to change is on top with git rebase -i

  - Then we will re-order the commits back to how they were previously with git rebase -i

  - Finally, we will move main to this updated part of the tree to finish the level (via the method of your choosing).

### 4.3 Juggling Commits #2

- In the previous level, we had to use rebase -i to reorder the commits. Once the commit we wanted to change was on top, we could easily --amend it and re-order back to our preferred order. The only issue here is that there is a lot of reordering going on, which can introduce rebase conflicts. Let's look at another method with git cherry-pick. Remember, the exact number of apostrophe's (') on the commit are not important, only the relative differences.

### 4.4 Git Tags

- Branches are easy to move around and often refer to different commits as work is completed on them. Branches are easily mutated, often temporary, and always changing. Since that's the case, there's a way to permanently mark historical points in your project's history.

- Git tags (somewhat) permanently mark certain commits as "milestones" that you can then reference like a branch.

      - Example: git tag v1 C1

### 4.5 Git Describe

# ***Remote***

## 1.0

### 1.1 Clone Intro

### 1.2 Remote Branches

- After doing **git clone** in the first level, the first thing you may have noticed is that a new branch appeared in our local repository called o/main. This type of branch is called a remote branch; remote branches have special properties because they serve a unique purpose.

- Remote branches have the special property that when you check them out, you are put into detached HEAD mode. Git does this on purpose because you can't work on these branches directly; you have to work elsewhere and then share your work with the remote (after which your remote branches will be updated). To be clear: Remote branches are on your local repository, not on the remote repository.

- Most developers actually name their main remote origin, not o. This is so common that git actually sets up your remote to be named origin when you git clone a repository.

### 1.3 Git Fetchin'

- Working with git remotes really just boils down to transferring data to and from other repositories. As long as we can send commits back and forth, we can share any type of update that is tracked by git (and thus share work, new files, new ideas, love letters, etc.). In this lesson we will learn how to fetch data from a remote repository -- the command for this is conveniently named git fetch.

- git fetch performs two main steps, and two main steps only. It:

  - downloads the commits that the remote has but are missing from our local repository, and...

  - updates where our remote branches point (for instance, o/main)

  - git fetch essentially brings our local representation of the remote repository into synchronization with what the actual remote repository looks like (right now).

  - git fetch, however, does not change anything about your local state. It will not update your main branch or change anything about how your file system looks right now.

### 1.4 Git Pullin'

### 1.5 Fakeing Teamwork

- The default behavior of fakeTeamwork is to simply plop down a commit on main. The remote was updated with a new commit, and we haven't downloaded that commit yet because we haven't run git fetch.

### 1.6 Git Pushin'

- Git push is responsible for uploading your changes to a specified remote and updating that remote to incorporate your new commits. Once git push completes, all your friends can then download your work from the remote. You can think of git push as a command to "publish" your work.

### 1.8 Locked Main

- If you work on a large collaborative team it's likely that main is locked and requires some Pull Request process to merge changes. If you commit directly to main locally and try pushing you will be greeted with a message similar to this:

! [remote rejected] main -> main (TF402455: Pushes to this branch are not permitted; you must use a pull request to update this branch.)

### 2.1 Push Main

### 2.2 Merging with remotes

### 2.3 Remoting Tracking

- Connection between main and o/main is explained simply by the "remote tracking" property of branches. The main branch is set to track o/main -- this means there is an implied merge target and implied push destination for the main branch.

- During a clone, git creates a remote branch for every branch on the remote (aka branches like o/main). It then creates a local branch that tracks the currently active branch on the remote, which is main in most cases.

- Once git clone is complete, you only have one local branch (so you aren't overwhelmed) but you can see all the different branches on the remote (if you happen to be very curious).

### 2.4 Git Push Arguments

### 2.5 Git Push arguments expanded

- In order to specify both the source and the destination of `<place>`, simply join the two together with a colon:

- git push origin `<source>:<destination>`

- This is commonly referred to as a colon refspec. Refspec is just a fancy name for a location that git can figure out (like the branch foo or even just HEAD~1).

- Once you are specifying both the source and destination independently, you can get quite fancy and precise with remote commands.

### 2.6 Fetch Arguments

- If you specify a place with git fetch like in the following command:

      - git fetch origin foo

Git will go to the foo branch on the remote, grab all the commits that aren't present locally, and then plop them down onto the o/foo branch locally.

- Git makes a special exception in this case because you might have work on the foo branch that you don't want to mess up!! This ties into the earlier lesson on git fetch -- it doesn't update your local non-remote branches, it only downloads the commits (so you can inspect / merge them later).

### 2.7 Source of Nothing

### 2.8 Pull Arguments

_______________________________________________________________________

- ![Start of the Main section](Images/Git%20Practice%20Initial%20start.png)

- ![Main section completed](Images/Main%20section%20completed.png)

- ![Remote Section Completed](Images/Remote%20Section%20Completed.png)

[Home](https://keelen-fisher.github.io/new-repository/)