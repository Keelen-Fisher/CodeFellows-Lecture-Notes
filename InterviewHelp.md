# Mock Interviews

## Interview 01

- Given a matrix, find the sum of each row.

Specifications

- Read all of the following instructions carefully.
    Act as an interviewer, giving a candidate a code challenge
    Score the candidate according to the Whiteboard Rubric
    You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate

- Feature Tasks

  - Ask the candidate to write a function to add up the sum of each row in a matrix of arbitrary size, and return an array with the appropriate values.

  - Avoid utilizing any of the built-in methods available to your language.
Don’t let the candidate get scared by the term “matrix”… It’s just an array of arrays.

  - The matrix will always be full of integers.

  - Negative values are possible.

  - All nulls will be counted as zeros.

- Structure

  - Familiarize yourself with the grading rubric, so you know how to score the interview.

  - Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

  - Every solution might look a little different, but the candidate should be able to at least convince you that their code works to solve the problem.

  - Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

  - Add up all the points at the end, and record the total at the bottom of the page.
  
***Example***

Input Output
[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ] [6, 15, 18]
[ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ] [6, 5, 20]
The candidate should draw the input and output as a square of integers.

***Documentation***

Record detailed notes on the rubric, to share with the candidate when the interview is complete.

## Interview 02

- Generate the nth Fibonacci number, 2 different ways.

- Specifications

  - Read all of the following instructions carefully.

  - Act as an interviewer, giving a candidate a code challenge

  - Score the candidate according to the Whiteboard Rubric

  - You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate

- Feature Tasks

  - As an interviewer, familiarize yourself with the Fibonacci Sequence

  - Ask the candidate to write a function to accepts an integer, and returns the nth number in the Fibonacci sequence.

  - You should be able to check their work for small values of n: if fib(n) is equal to fib(n-1) + fib(n-2).

  - Encourage the candidate to work quickly towards a first solution, that is either recursive or iterative (with a while or for loop)

  - Then ask the candidate to solve it with the other approach (eg: if they first used an iterative solution, ask for a recursive solution)

  - Evaluate and compare the Big-O of both solutions

  - The recursive solution might be as bad as O(2n)—that’s 2 to the power of n— which is so bad most laptops would take a while to solve for n larger than about 40

  - The iterative solution should be roughly O(n), which means a laptop could find answers for large values of n

  - There is also an O(1) solution, based on a mathematical formula… Not likely anyone will know this without looking it up! (Did you see the formula on the page about the sequence linked above?) If time allows, try to implement the formula with the candidate.

  - Avoid utilizing any of the built-in methods available to your language.
Structure

  - Familiarize yourself with the grading rubric, so you know how to score the interview.

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

Every solution might look a little different, but the candidate should be able to at least convince you that their code works to solve the problem.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

Add up all the points at the end, and record the total at the bottom of the page.

Example

Input Output

|0----0|
________
|1----1|
________
|2----1|
________
|3----2|
________
|4----3|
________
|5----5|
________
|6----8|
________
|7---13|
________
|8---21|
________
... ...
|14--377|
________
... ...
|45---1134903170|
_________________
... ...

- Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete.
