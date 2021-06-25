// Write a function which takes in a string and returns counts of each character in the string

// function charCount(str) {
//     //make object to return at the end
//     let result = {};
//     // loop over string, for each character...
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i]
//         // if the char is a number/letter AND is a key in object, add one to count
//         if(result[char] > 0) {
//             result[char]++;
//          // if the char is a number/letter AND not in object, add it to object and set value to 1
//         } else {
//             result[char] = 1;
//         };
//     }
//     // if character is something else (space, period, etc.) don't do anything
//     // return object at the end

//     return result;
// }

function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount("Algo Test"))