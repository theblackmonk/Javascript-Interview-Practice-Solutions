//https://leetcode.com/problems/two-sum/


/*
nums = [0,1] ["10,000"]
target
output 2 indices always

nested for loop - for the length of numbs
for nums 1 check if nums 1 + index i == target
edge case in nested for loop is that temp1 != temp2

is there always a solution
what is the max size of let, var and can they fit a 10^(9) integer

*/
let temp1, temp2
let nums = [2,15,11,7]
let target = 9

//Input
console.log("Input: " + nums)
console.log("Target: ", target)

var twoSum = function(nums, target) {
    //iterate through first variable in nums
    for(let i = 0;i < nums.length;i++){
       
       //iterate through second variable in nums
        for(let j = i+1;j < nums.length;j++){
            //exclude edge case of using same element twice
            if(i != j){
               //check if indices add up to target 
               if(nums[i] + nums[j] == target){
                   //return indices of two selected numbers
                   temp1 = nums[i]
                   temp2 = nums[j]
                   
                   
                   //exactly one solution so the function must return a value
                   return [i, j]
               }
               
           }
       }
    }
};


//code editor edition

function twoSum(nums, target) {
    //iterate through first variable in nums
    for(let i = 0;i < nums.length;i++){
        //console.log("i: ", i)
       //iterate through second variable in nums
        for(let j = i+1;j < nums.length;j++){
            //exclude edge case of using same element twice
            if(i != j){
               //check if indices add up to target 
               if(nums[i] + nums[j] == target){
                   //return indices of two selected numbers
                   temp1 = nums[i]
                   temp2 = nums[j]
                   console.log(temp1, temp2)
                 
                   //exactly one solution so the function must return a value
                   return [i, j]
               }
               
           }
       }
    }
};

var answer = twoSum(nums, target)
console.log("Result: ", answer)

//Time complexity
// O(n^2)
//Space complexity
//O(1)


//Discussion answer
console.log("")
console.log("Discussion Answer")
/**
* Understand the problem: any two num sum from given arr === target
* concrete examples - [3,3] target = 6 output - [0, 1]
* Brute Force solution
* Optimise your approach
* a + b = target || a = target - b
* check
*/

const threeSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target) return [i, j]
        }
    }
    return []
};

console.log("threeSum: ", threeSum)

// Time complexity - O(n^2) and Space complexity - O(1)


//Revision------------------------------------------------------
console.log("Revision: ")
function twoSum(nums, target) {
    for(let i = 0;i < nums.length;i++){                //iterate through first variable in nums
        for(let j = i+1;j < nums.length;j++){          //iterate through second variable in nums starting from the right of the first variable
               if((nums[i] + nums[j]) == target) return [i, j]  //exactly one solution so the function must return a value
       }
    }
};

var answer = twoSum(nums, target)
console.log("Result: ", answer)


//Hash Solution

const fourSum = (nums, target) => {
    let hashMap = new Map();
    for (let i=0; i<nums.length;i++){
      let remain = target - nums[i];
      if (hashMap.has(remain)) return [i, hashMap.get(remain)];
      hashMap.set(nums[i], i);
    }
  }


console.log("fourSum: " + fourSum(nums, target))


//arrow funcitons
const arrowFunction = (x, y) => x * y;
console.log("arrowFunction: " + arrowFunction(5, 3))

//Redo Hash Solution
//let nums = [2,7,11,15]
//let target = 9

console.log("")
console.log("Redo hash function")

//nums[i] = the value
// i = index

const fiveSum = (nums, target) => {
    let hashMap = new Map()
    for(let i=0; i<nums.length;i++){
        let remain = target - nums[i]
        console.log("i: " + i, " hashMap: ", hashMap)
        if(hashMap.has(remain)) return [hashMap.get(remain), i]
        hashMap.set(nums[i], i)
    }

}

console.log("fiveSum: " + fiveSum(nums, target))

/*
Time O(n) Space O(n)
Create a null hashmap and then add key:value to it.
Example, with the array [3,2,4] and target is 6.
First, hashmap is null, and remain is 6 - nums[0] = 6 - 3 is 3. 3 is not in the hashmap so we add nums[0] and the position of nums[0] to the hashmap. hashMap now is { 3:0 }.
Ok, hashmap is { 3 : 0 }, and we calculate remain again is 6 - nums[1] = 6 - 2 is 4. 4 is not in the hashmap so we add nums[1] and position of nums[1] to the hashmap. Hashmap now is { 3:0, 2:1 }.
Then, hashmap is { 3:0, 2:1}, and we calculate remain again is 6 - nums[2] = 6 - 4 is 2. 2 is in the hashmap { 3:0, 2:1}, so we return [i, hashMap.get(remain)] ~ [2, 1]

*/