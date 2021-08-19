/*

Implement a function called, areThereDuplicates which accepts a variable
number of arguments, and checks whether there are any duplicates among the 
arguments passed in. You can solve this using the frequency counter pattern
OR the multiple pointers pattern.

Examples: 

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'd') // true

Restrictions:
Time - O(n)
Space - O(n)

*/


// Frequency Counter Solution

function areThereDuplicates() {
    let collection = {}

    for(let val of arguments) {
        collection[val] = (collection[val] || 0) + 1
    }

    for(key in collection) {
        if(collection[key] > 1) {
            return true
        }
    }

    return false
}

console.log(areThereDuplicates(1,2,3,3))

// One Liner
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length
}