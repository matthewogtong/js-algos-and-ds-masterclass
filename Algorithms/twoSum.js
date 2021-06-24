function twoSum(nums, target) {
    
    let comp = {}; 
    for(let i = 0; i < nums.length; i++) {
        if(comp[nums[i]]) {
            return [i, comp[nums[i]]]
        } else {
            comp[target - nums[i]] = i
        }
    }
};

console.log(twoSum([2,7,11,15], 9))