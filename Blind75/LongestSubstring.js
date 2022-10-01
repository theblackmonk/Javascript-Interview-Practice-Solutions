//https://leetcode.com/problems/longest-substring-without-repeating-characters/

//given s, longest substring that doesn't reapeat

/**
 * #1 Key Points
 * given s, longest substring that doesn't repeat
 * 
 * #2 Inputs/Outputs, Edge Cases
 * s will be letters, digits, symbols, and spaces
 * 
 * #3 Goal
 * Lowest amount of time while using only a decent amount of space
 * 
 * #4 Brute Force
 * Nested for loop O(n^2) Save the starting index and the length before repetition in a variable
 * 
 * #5 Why you should optimize
 * The problem is it would be slow and I could end up creating a lot of variables
 * I wouldn't want to store those in an array that would get too large
 * 
 * #6 Talk through the optimized approach
 * 
 * #7 Write down steps
 * 
 * #9 Modularize
 * 
 * #10 Code
 * 
 * #11 Error Checks
 */

var s = "abcreabcbb"
var largest = 1


 var lengthOfLongestSubstring = function(s) {
    let hashTable = new Map()
    let longestSubstring = new Map()
    for(let i=0;i<s.length;i++){
       
        if(hashTable.has(s[i])){
            //if we see a repeat
            //determine if this is the largest and save if necessary
            //length = current index - hashed index
        
            if(i - hashTable.get(s[i]) > largest){          
                largest = i - hashTable.get(s[i])    //ex: largest = 3 - 0
                longestSubstring.set(largest, s.substring(hashTable.get(s[i]), i))  //store the length and the substring in map variable
            }
            //delete old hash ex "a":0  and replace it with "a":3
            hashTable.delete(s[i])
            hashTable.set(s[i], i)    
        } else {
            //if we don't see a repeat store the value in the hash table
            hashTable.set(s[i], i)
        }
    }
    return [largest, longestSubstring.get(largest)]
};

console.log(lengthOfLongestSubstring(s))


//leetcode solution