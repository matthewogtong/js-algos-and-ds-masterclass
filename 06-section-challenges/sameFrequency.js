/*

Write a function called sameFrequency. Given two positive integers, find out
if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false

*/

function sameFrequency(num1, num2) {
    const first = num1.toString()
    const second = num2.toString()

    if(first.length !== second.length) {
        return false
    }

    let fq1 = {}
    let fq2 = {}

    for(let num of first) {
        fq1[num] = (fq1[num] || 0) + 1
    }

    for(let num of second) {
        fq2[num] = (fq2[num] || 0) + 1
    }

    for(const key in fq1) {
        if(!(key in fq2) && fq1[key] !== fq2[key]) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(1823,2812))