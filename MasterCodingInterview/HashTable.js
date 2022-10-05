//Hash Tables
//In JS, objects are a type of hash table

let user = {
    age: 54,
    name: 'Kylie', 
    magic: true,
    scream: function() {
        console.log('ahhhhhhh!')
    },
    console: {
        age: 35
    }
}

console.log(user.age) //O(1)
user.spell = "abra kadabra"  //O(1)
user.scream()  //O(1)

console.log(user.spell)
console.log(user.console.age)

//The problem with hash tables are collisions O(n). Depending on the size of the hash table
//Two values can get stored in the same bucket. Nothing is checking for this
//The ways to deal with this include linked lists

//Maps is a version of Hash Tables that maintain order

const a = new Map()
const b = new Set()

//Example Create your own HashTable Class to understand time complexity
class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    //Underscore is a developer standard to not access a function outside of class
    _hash(key) {
        let hash = 0
        for(let i=0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash
    }

    //Take in key and value, Output nothing, Push key, value pair to correct hashed index of the array
    set(key, value){
        let index = this._hash(key)
        this.data[index] = value
        return [index, value]
    }

    //Hash the key, then retrieve that value from array index
    //You can add a for loop to account for collisions if you want to
    get(key){
        let index = this._hash(key)
        return this.data[index]
    }
}

const myHashTable = new HashTable(50)
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.get('grapes'))



//Interview Question
/* Google Question
Given an Array = [2,5,1,2,3,5,1,2,4]
It should return 2

Given an Array = [2,1,1,2,3,5,1,2,4]
It should return 1

Given an Array = [2,3,4,5]
It should return undefined
 
*/

/*
#1 Key Points
Array, searching 1st repeat, returning that repeat
Pointer that iterates front to back, store each value somewhere, check each value against all stored values

#2 Inputs/Outputs, Edge Cases (IOE)
Input = given array, Output = repeated value
Edge Cases, all ascii characters? numbers only? spaces, can there be an array of size one, empty arrays, null values in array

#3 Goal
Optimize a solution for low time complexity and reasonably low space complexity

#4 Brute Force
Nested for loop with where I iterate through the array and push each value to a new array that I check with nested for loop

#5 Why Optimize
O(n^2) would be slow with a sufficiently large array. 

#6 Optimized
Hash Table Set we're only storing one thing, the value itself and we don't need the index or anything like that

iterate through each value in the input array, check if the value exists in hash, if not then add it

 */
var arr1 = [2,5,1,2,3,5,1,2,4]
var arr2 = [2,1,1,2,3,5,1,2,4]
var arr3 = [2,3,4,5]

//Time: O(n)  Space: O(n)
var repeatedNumber = function(arr){
    let hashTable = new Set()
    //iterate through input array
    for(let i=0; i<arr.length; i++){
        if(hashTable.has(arr[i])) return arr[i]
        hashTable.add(arr[i])
    }
    return "nothing repeats"
}

console.log("\n" + repeatedNumber(arr3))