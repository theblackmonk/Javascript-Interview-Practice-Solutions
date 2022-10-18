//https://leetcode.com/problems/product-of-array-except-self/

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

let nums = [1,2,3,4]

//Two Pointers slow and fast
//Slow points to the index we will not multiply and fast multiplies
//in nest for loop set if statement so i != j
//If array is initially null we will set equal to one and start multiplication

//Brute Force Method
//Time: O(n^2)  Space: O(n)
var productExceptSelf = function(nums) {
    let output = []
     //slow pointer
     for(let i=0;i<nums.length;i++){
         //fast pointer
         for(let j=0;j<nums.length;j++){
             //multipy everything but slow index i together
             if(i != j){
                 if(output[i] == null) output[i] = 1
                 output[i] *= nums[j]   //output equals number times number
             }
         }
     }
     return output
 };

 console.log(productExceptSelf(nums))


 //Leetcode Solution

 var productExceptSelf2 = function(nums){
    const res = []
    let product = 1
    //console.log("Start: " + res)
    for(let i=0;i<nums.length;i++){
        
        res.push(product)
        product *= nums[i]
        //console.log(res + "      " + product)
    }
    //console.log("Middle: " + res)
    product = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= product;
        product *= nums[j];
        //console.log(res + "      " + product)
    }
    

    return res;


 }

 console.log("Finished: " + productExceptSelf2(nums))




 //LeetCode Solution 2

 var productExceptSelf3 = function(nums) {
    // First, create a prefix array that moves from the left,
    // gathering the running product of the prefix at each index
    const prefix = []
    
    // Move left in the input array
    for (let i=0; i<nums.length; i++) {
        // If i === 0, start with `1`, since there is no prefix
        if (i===0) {
            prefix[i] = 1
        } else {
            // Otherwise, multiply nums[i-1] times the prefix at position i-1,
            // and add that to the prefix array at position i
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }
    
    // Then, let's create a suffix array
    const suffix = []
    
    // Move right in the input array
    for (let i=nums.length - 1; i>=0; i--) {
        // For the last index, we have no suffix, so just add a 1 to that position
        if (i===nums.length - 1) {
            suffix[i] = 1
        } else {
            // Otherwise, we multiply nums[i+1] by the suffix at position i+1
            // and add that to the suffix array at position i
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }
    }
    
    // Finally, our result array should be the products of prefix * suffix for each position
    const result = []
    
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix[i] * suffix[i]
    }
    
    return result
};

console.log(productExceptSelf3(nums))