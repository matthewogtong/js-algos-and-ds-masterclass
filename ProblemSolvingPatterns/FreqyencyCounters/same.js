// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same

// naive solution

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false
//         }
//         arr2.splice(correctIndex, 1)
//     }

//     return true
// }

// console.log(same([1, 2, 3], [1, 4, 9]))

// frequency counter solution

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let fq1 = {}
    let fq2 = {}

    for (let val of arr1) {
        fq1[val] = (fq1[val] || 0) + 1
    }

    for (let val of arr2) {
        fq2[val] = (fq2[val] || 0) + 1
    }

    for (let key in fq1) {
        if (!(key ** 2 in fq2)) {
            return false
        }

        if (fq1[key] !== fq2[key ** 2]) {
            return false
        }
    }

    return true
}

console.log(same([1, 2, 3], [1, 4, 9]))