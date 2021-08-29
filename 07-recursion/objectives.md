# Objectives

* Define what recursion is and how it can be used

* Understand the two essential components of a recursive function

* Visualize the call stack to better debug and understand recursive functions
* Use helper method recursion and pure recursion to solve more difficult problems

### What is recursion?
* A **process** (a function in our case) that calls itself

### Examples of where you have worked with recursion
* JSON.parse / JSON.stringify
* document.getElementById and DOM traversal algorithms
* Object traversal
* We will see it with more complex data structures
* It's sometimes a cleaner alternative to iteration

#### IN almost all program languages, there is a built in data structure that manages what happens when functions are invoked

### The call stack
* It's a stack data structure
* Any time a function is invoked it is place (pushed) on the top of the call stack
* When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

### Base Case
* The condition when the recursion ends

### Misc Notes 
* JavaScript uses the call stack tool to manage function invocations
* A base case is a situation when the recursion ends