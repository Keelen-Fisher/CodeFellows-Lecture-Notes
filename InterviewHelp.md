# Mock Interviews

## Interview 01

### Given a matrix, find the sum of each row

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

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 02

### Generate the nth Fibonacci number, 2 different ways

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

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 03

### Validate whether or not a Linked List is palindrome

- Specifications

  - Read all of the following instructions carefully.
  - Act as an interviewer, giving a candidate a code challenge
  - Score the candidate according to the Whiteboard Rubric
  - You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate

- Feature Tasks
  - Ask the candidate to write a function to validate whether or not a Linked list is palindrome
  - Help the candidate understand the definition of a Palindrome if he/she is unsure of it.
  - A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward.
  - Avoid utilizing any of the built-in methods available in your language.
  - This problem can be solved using different approaches:
    - Using a helper data structure (Array or Linked List) to keep track of the nodes.
    - This method takes O(n) and uses O(n) extra space.
    - Reversing the Linked List, and checking for equality of the reversed part.

- Structure
  - Familiarize yourself with the grading rubric, so you know how to score the interview.

- Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

- Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

- Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

- Add up all the points at the end, and record the total at the bottom of the page.

Example
Input Output
head->{t}->{a}->{c}->{o}->{c}->{a}->{t}: TRUE
head->{m}->{o}->{o}->{m}: TRUE
head->{h}->{o}->{u}->{s}->{e}: FALSE

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 04

### Reverse a Linked List

- Specifications
  - Read all of the following instructions carefully.
  - Act as an interviewer, giving a candidate a code challenge
  - Score the candidate according to the Whiteboard Rubric
  - You are free to offer suggestions or guidance (and see how they respond), but don’t solve it for the candidate

- Feature Tasks
  - Ask the candidate to write a function to reverse a Singly Linked List.
  - Avoid utilizing any of the built-in methods available in your language.
  - Attempt to guide the candidate to an in-place solution (i.e. avoid creating a copy of the Linked List).
  - This problem can be approached in several ways:
  - Iterating over the linked list and storing a reference to a current node, its previous node, and its next node.
  - In every iteration, after the next node is stored, the current’s node next pointer is pointed at the stored reference to the previous node.
  - This solution takes O(n) time and uses O(1) extra space.
  - A recursive solution that reverses the body of the link list before re-connecting the head.
  - This solution takes O(n) time and uses O(n) space on the call stack.
  - Creating a copy of the linked list, inserting elements at the head of the new list.
  - This solution takes O(n) time and uses O(n) space.
- Structure
  - Familiarize yourself with the grading rubric, so you know how to score the interview.

  - Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

  - Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

  - Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

  - Add up all the points at the end, and record the total at the bottom of the page.

Example

Input:
head->{3}->{2}->{1}  **Reverts to:**

Output:
head->{1}->{2}->{3}

Input:
head->{'a'}->{'b'}->{'c'} ***Reverts to:***

output
head->{'c'}->{'b'}->{'a'}

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 05

### Max stack. Write a method that returns the “biggest” element in a stack

- Feature Tasks
  - Ask the candidate to write a ‘Max Stack’ which is defined as a Stack with an additional getMax() member function which returns the ‘biggest’ element in the Stack.
  - The candidate can assume that only numeric values will be stored in the Stack, but she/he has to ask before the interviewer can state this.
  - The internal memory of the Stack can be approached in different ways.

    - Using a Linked List
      - This approach uses O(n) space.

    - Using an Array
      - This approach can either use O(n) space or O(c) where c is the size of the array in static-size arrays.
      - If your language doesn’t support dynamic arrays,Inquire about the candidate’s decision of using a limited amount of storage for the Stack.

    - Using a Node class and manually creating connections by maintaining a reference to the ‘top’ of the stack.
    - This approach uses O(n) space.

- This ‘getMax()’ member function can be approached in several ways as well:
  - Modifying the traditional push and pop methods to keep track on the maximum value so far.
  - Use a maxStack instance variable, and each time you push a number, you check if it’s >= the peek on maxStack; if so, push it onto both maxStack and the actual stack. Then when popping, check if equal to max on maxStack, and if so, also pop maxStack.
    - This solution takes O(1) time to both maintain and retrieve the maximum value.

- Traversing the entire Stack to calculate the maximum value.
  - This solution takes O(n) time.
  - If the candidate is considering this approach, comment on the fact that there might be a more efficient way to calculate the maximum value, but avoid providing specific details.

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 06

### Duck Duck Goose

- People are standing in a circle playing Duck Duck Goose. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is removed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and wins the game.

- Write a function called `DuckDuckGoose()` that accepts some strings and an int `k`. Start at the beginning and count up to `k` and remove the person at that position. Keep counting from that index and count up to `k` over and over until only one person is left. Return a string with the name of the last person left.
 Example:

      n=3
      A, B, C, D, E  // 1: A; 2: B; 3: C
      A, B, D, E     // C was removed
      B, D, E        // A was removed
      B, D           // E was removed
      D              // B was removed
                // only D is left 

- Feature Tasks
  - Ask the candidate to write a function to execute the game described above, using only a Queue.
  - Help the candidate understand the rules of the game if they are unsure of it.
    - Feel free to share the example above to show an example

  - Avoid utilizing any of the built-in methods available in your language.

  - This problem can be solved using a queue:
    - One solution is to enqueue and dequeue k number of times. Once k is hit, skip the enquque process for that entry, removing it from the queue. Repeat until there is only 1 node in the queue remaining.
      - This method takes O(n * k) time and uses O(1) (constant) space during this process.

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 07

## Sum of numbers in a binary tree

## Feature Task

- Find the sum of all the odd numbers in a binary search tree.
  - Any of the traversals (depth or breadth) are acceptable.

__________________________________________________________________________________________________________________________________________________________________________________________________________________

## Interview 08

## Compare Trees

## Feature Tasks

- You are working with a file structure with only at most 2 files or folders. Each file directory has either one or two folders/files.

- Comparing two different file directories, create a method that takes in 2 directory structures and compares both and determines whether or not they have the same number of individual files.
