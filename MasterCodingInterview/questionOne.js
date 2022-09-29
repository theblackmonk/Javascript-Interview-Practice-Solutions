//Interview Question 1
//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

//For example:
/*
const array1 = ['a', 'b', 'c', 'd', 'e']
const array2 = ['z', 'y', 'i']

should return false
-----------------------

const array1 = ['a', 'b', 'c', 'd', 'x']
const array2 = ['z', 'y', 'x']

should return true
 */

/*
 * #1 Key points
 *    input 2 arrays, function returns boolen, searching for common items
 * 
 * #2 Double check the inputs and outputs
 *    max/min size to the array? Will it be char values only? Will it be one letter only? Will it always be an array?
 *    return the function as a boolean
 * 
 * #3 What is the main goal?
 *    Is my goal here to optimize for time, or optimize for space and memory?
 * 
 * #5 Present Brute Force approach
 *    Find the longer array using the .length function 
 *    Start with the longer array so I can possibly solve this a little faster. It will still be O(n)
 *    But that will allow me to loop through the shorter array within the nested for loop  
 * 
 *    Nested for loop. First loop iterates through the larger array from start to finish
 *    Second for loop iterates through the shorter array and checks for a match
 *    If there is a match return true, otherwise return false after nested loop
 * 
 * #6 This wouldn't be the best approach since O(n^2) isn't very efficient and would have a high time complexity
 *    especially if the array gets larger
 * 
 * #7 Verbally Walk through code
 * 
 * #8 Write down code steps
 */

const array1 = ['a', 'b', 'c', 'd', 'x']
const array2 = ['z', 'y', 'x']

const array3 = ['a', 'b', 'c', 'd', 'e']
const array4 = ['z', 'y', 'i']

//Time: O(n^2)   Space: O(1)
function commonItems(array1, array2){
    for(let i=0;i<array1.length;i++){                //first loop
        for(let j=0;j<array2.length;j++){            //second loop
            if(array1[i] == array2[j]) return true
        }
    }
    return false
}

console.log("commonItems: " + commonItems(array1, array2))

//Optimize Search with Hash Table (object) to get O(n) Linear Search Time

//Time: O(n)   Space: O(n)
function commonItemsHash(array1, array2){
    let hashTable = new Map()             //Map key:value pair incase I want to return the index of the match
    for(let i=0;i<array1.length;i++) hashTable.set(array1[i], i)
    for(let i=0;i<array2.length;i++){
        if(hashTable.has(array2[i])) return true
    } 
    return false
}

console.log("\n" + "commonItemsHash: " + commonItemsHash(array1, array2))
//Check for no parameters, undefined, null, massive arrays, async code
//What if the input arrives as a stream (divide and conquer approach)


/**
 * #11 Comment in error checks
 * 
 * #12 eliminate i and j
 */


