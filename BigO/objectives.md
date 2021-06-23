# Objectives

#### Motivate the need for something like Big O Notiation
* It's important to have a precise vocabulary to talk about how our code performs
* Useful for discussing trade-offs between different approaches
* When code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

#### Describe what Big O Notation is 
* Big O Notations is a way to formalize fuzzy counting
* It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
* We say that an algorithm is **O(f(n))** if the number of simple operatiosn the computer has to do is eventually less than a constant times **f(n)**, as **n** increases
    * f(n) could be linear (f(n) = n)
    * f(n) could be quadratic (f(n) - n<sup>2</sup>))
    * f(n) could be constant (f(n) = 1)
    * f(n) could be something entirely different

#### Simplify Big O Expressons
* Constants don't matter
    * O(2n) -> O(n)
    * O(500) -> O(1)
    * O(13n<sup>2</sup>) -> O(n<sup>2</sup>)
* Smaller terms don't matter
    * O(n + 10) -> O(n)
    * O(1000n + 50) -> O(n) 
    * O(n<sup>2</sup> + 50n + 10) -> O(n<sup>2</sup>)
* Big O Shorthands
    * Arithmetic operations are constant
    * Variable assignment is constant
    * Accessing elemnts in an arry (by index) or object (by key) is constant
    * In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
 
#### Define "time complexity" and "space complexity"
*

#### Evaluate the time complexity and space complexity of different alogorithms using Big O Notation
