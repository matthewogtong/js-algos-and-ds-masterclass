// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n 
// consecutive elements in the array.

/*
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
*/

// initial naive solution

//  function maxSubarraySum(arr, num) {
//      if(num > arr.length) {
//          return null
//      }

//      let max = -Infinity
//      for(let i = 0; i < arr.length - num + 1; i++) {
//          let temp = 0
//         for(let j = 0; j < num; j++) {
//             temp += arr[i + j]
//         }
//         if(temp > max) {
//             max = temp;
//         }
//      }
//      return max;
//  }

//  console.log(maxSubarraySum([1,2,5,2,8,1,5],2))

 // refactored implementing Sliding Window approach

//  function maxSubarraySum(arr, num) {
//      let maxSum = 0
//      let tempSum = 0
//      if (arr.length < num) return null
//      for (let i = 0; i < num; i++) {
//          maxSum += arr[i]
//      }
//      tempSum = maxSum
//      for(let i = num; i < arr.length; i++) {
//          tempSum = tempSum - arr[i - num] + arr[i]
//          maxSum = Math.max(maxSum, tempSum)
//      }
//      return maxSum
//  }

//  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

 function leastOccuringObject(arr) {
     let finalResult = 1
     let tempResult = 1
     let comp = {}
     for(let i = 0; i < arr.length; i++) {
         comp[i] = comp[i] ? comp[i] + 1 : 1
     }

     for(var key in comp) {
         tempResult = comp[key]
         return tempResult
     }

     
 }

 console.log(leastOccuringObject([1,1,2,2,3,3]))
