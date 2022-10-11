//https://leetcode.com/problems/contains-duplicate/

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
*/


let nums = [1,2,3,1]

//Time: O(n)  Space: O(n)
var containsDuplicate = function(nums) {
    let hashTable = new Set()
    for(let i=0;i<nums.length;i++){
        if(hashTable.has(nums[i])) return true
        hashTable.add(nums[i])
    }
    return false 
};

console.log(containsDuplicate(nums))


/*
filter and indexOf

var containsDuplicate = function(nums) {
    let res = nums.filter((a, b) => nums.indexOf(a) !== b)
    return res.length ? true : false
};

----------------------------------------------------
sort then check for duplicates

var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b)
    var i=0;
    var j=nums.length-1
    while(i<j){
        if(nums[i]==nums[i+1]) return true;
        if(nums[j]==nums[j-1]) return true;
        i++;
        j--
    }
    return false
};




--------------------------------------------------------
Set by default does not allow duplicates
By putting the array into the set the duplicates are already delted
If the length of set = length of the array then there are no duplicates
else there is a duplicate

var containsDuplicate2 = function(nums) {
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate2(nums))

*/

const s = new Set(nums);
console.log(s)