// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.

// function validAnagram(str1, str2) {
//     if (str1.length != str2.length) {
//         return false;
//     }

//     let fq1 = {};
//     let fq2 = {};

//     for (let val of str1) {
//         fq1[val] = (fq1[val] || 0) + 1;
//     }

//     for (let val of str2) {
//         fq2[val] = (fq2[val] || 0) + 1;
//     }

//     for (let key in fq1) {
//         if (!(fq1[key] in fq2) && !(fq1[key] === fq2[key])) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(validAnagram("hello", "heoll"))


//second solution

