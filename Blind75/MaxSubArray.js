//https://leetcode.com/problems/maximum-subarray/
//https://leetcode.com/problems/maximum-product-subarray/

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/

let nums = [-2,1,-3,4,-1,2,1,-5,4]

//Brute Force
var maxSubArray = function(nums) {
    let sum, output
    let maxSum = nums[0]
    let maxOutput = 0
    //slow pointer
    for(let i=0;i<nums.length;i++){
        sum = 0  //clear sum
        //fast pointer
        for(let j= i;j<nums.length;j++){
            sum += nums[j]
            maxSum = Math.max(maxSum, sum)
        }
        maxOutput = Math.max(maxOutput, maxSum)
    }
    return maxOutput
};

console.log(maxSubArray(nums))

//Leetcode Solution
//https://leetcode.com/problems/maximum-subarray/discuss/1428422/JavaScript-Maximum-Subarray-Written-Explanation-%2B-Code-Demo
//https://www.youtube.com/watch?v=edDqVOOEAYU

//nums = [-2,1,-3,4,-1,2,1,-5,4]

/*Kadanes algorithm 
start with nums[i] as default value
-2 | -1, 1 | -2, -3 |
-2 |  1    | -2
*/

const maxSubArray2 = function(nums) {
	// initialize current & max values equal to the value of the first number in nums
    let current = nums[0];
    let max = nums[0];   
	
	// iterate through nums, starting at the second value
    for(let i=1; i<nums.length; i++){      
		
		// keep track of the current subArray, discarding and resetting if current is negative
        current = Math.max(nums[i], current + nums[i]);
		
		// keep track of max subarray by checking to see if current subarray is greater than max
        max = Math.max(current, max);
    }
    return max;
};

console.log(maxSubArray2(nums))