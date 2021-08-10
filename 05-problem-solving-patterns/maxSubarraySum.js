// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n 
// consecutive elements in the array.

/*
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
*/

 // naive solution

 function maxSubarraySum(arr, num) {
     if(num > arr.length) {
         return null
     }

     let max = -Infinity
     for(let i = 0; i < arr.length - num + 1; i++) {
         let temp = 0
        for(let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if(temp > max) {
            max = temp;
        }
     }
     return max;
 }

 console.log(maxSubarraySum([1,2,5,2,8,1,5],2))
