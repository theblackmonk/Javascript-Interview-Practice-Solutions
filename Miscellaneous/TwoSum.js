//return index of numbers that add to sum

//edge case no values add to sum
//can't be the same number adding to the sum, must be two seperate numbers that sum

//inspect each variable in array against the remaining variables in the array to check if there is a sum
//brute force it with a for loop O(n^2)

//4 + 4 = 8
//Sum - 4 = 4

//Optimize
//Hash table where Sum - current variable inspected and store it in the hash
//iterate through until Sum - variable = value in hash table

//Time: O(n^2)  Space: O(1)
const array = [1,2,3,9]
const array2 = [1,2,4,4]
const target = 8
var flag = false
var hashFlag = false

function sum(array){
    for(let i=0;i<array.length - 1;i++){                          //start at begining of array and end one variable before the end of array
        for(let j=i+1;j<array.length;j++){                        //start at the second variable and search till end of array
            if((array[i] + array[j]) == target) {
                console.log("Index: [", i, ", ", j, "]")
                flag = true
            }
        }   
    }
    if(flag == false) console.log("No Sum Found")
}

console.log("array")
sum(array)

console.log("\n" + "array2")
sum(array2)


//Optimize from Time Complexity: O(n^2) to O(n)
//Time: O(n)  Space: O(n)

//Iterate once through whole array, and hash at each variable. Check each variable against hash map
//Sum - variable = hashed value

function sumHash(array){
    let hashMap = new Map()
    let remaining
    array.forEach(i => {
        remaining = target - array[i]
        if((remaining) = hashMap(remaining)){
            console.log(hashMap(remaining), i)
            return true
        } else {
            hashMap(remaining)
            return false
        }
    })
}


//javascript functions as boolean practice-------------------------------------------
//Fix this code
function isLess(a, b){
    if(a < b) {
        return true
    } else {
        return false
    }
}

console.log("\n" + isLess(10,15))

//Optimized
function isLess2(a, b){
    return (a === b)
}

console.log("\n" + isLess2(10,15))
