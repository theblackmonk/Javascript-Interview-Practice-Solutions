//Array good for lookup and adding/removing to stack O(1)
//Not the best for insertion and deletion O(n)

const strings = ['a', 'b', 'c', 'd']
console.log(strings)


//push O(1)
strings.push('e')
console.log(strings)
//pop O(1)
strings.pop()
strings.pop()
console.log(strings)


//unshift  O(n) loops through whole array and updates the index address
strings.unshift('x')      //adds x to front of array
console.log(strings)

//splice O(n) loop through whole array
//adds or remove elements, overwrites array
//strings.splice(index +/-, howmany remove, new elements...)
strings.splice(2, 0, 'alien')
console.log(strings)


//Dynamic Arrays------------------------------------------
//Higher level programming langages like javascript have dynamic arrays built in
//when I add to an array it automatically copies the array and creates a new one in
//a memoery location with size allocation typically twice the size of the array


//Create a function that reverses a string--------------------------------------------
/*
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

console.log(`\n`+ "--------")

const sentence2 = 'David'

function Reverse(value) {
    let stringLength = value.length
    let reverseString = []

    for(let i = 0; i<stringLength;i++){
        reverseString.push(value[stringLength - i - 1])
    }
    
    return (reverseString.join(''))
    
}

console.log(Reverse(sentence2))

console.log(`\n` + `\n` + "--------")


//----------------------------------------------------------------

const sentence = 'Hi My name is Andrei'

function reverse(str) {

    if(!str || str.length < 2 || typeof str !== 'string'){
        return "error"
    }

    var reverseString = []
    for(let i=0;i<str.length;i++){
        
        reverseString.push(str[str.length - i - 1])     //start the pointer at the end of the old string and push to new string
    }
    return reverseString.join('')                       //push to an array and then convert array to string
}

console.log("reverse1: " + reverse(sentence))


//Optimize

function reverse2(str) {
    console.log("split: ", str.split(''))
    console.log("reverse: ", str.split('').reverse())
    console.log("join: ", str.split('').reverse().join(''))
    return str.split('').reverse().join('')
}

console.log("reverse2: " + reverse2(sentence))

//ES6
const reverse3 = str => str.split('').reverse().join('')

console.log("reverse3: " + reverse3(sentence))

//ES6 alternative
const reverse4 = str => [...str].reverse().join('')

console.log("reverse4: " + reverse4(sentence))

//Can you merge 2 sorted arrays into one that is still sorted

const sorted1 = [3,4,5,0,0,0,0,0]
const sorted2 = [1,2,5,6,7]
var g = 3
var v = sorted2.length



/*function mergeSortedArrays(arr1, arr2){

    const mergedArray = []
    const totalLength = arr1.length + arr2.length

    //Check if array is empty with arr1.length === 0 


    if(!arr1 || !arr2 || typeof arr1 !== 'object' || typeof arr2 !== 'object' || arr1.length === 0 || arr2.length === 0){
        return "error"
    }

    var pointer1 = 0
    var pointer2 = 0
    
    for(let i=0;i<totalLength;i++){
        console.log("")
        if(pointer1 == arr1.length - 1){
            console.log("loop 1")
            mergedArray.push(arr2[pointer2])
            if(pointer2 <= arr2.length - 1) pointer2++
        } else if(pointer2 == arr2.length - 1){
            console.log("loop 2")
            mergedArray.push(arr1[pointer1])
            if(pointer1 <= arr1.length - 1) pointer1++
        } else if(arr1[pointer1] < arr2[pointer2]){
            console.log("loop 3")
            mergedArray.push(arr1[pointer1])
            if(pointer1 < arr1.length - 1) pointer1++    //stops pointers exceeding array size
        } else if(arr1[pointer1] > arr2[pointer2]) {
            console.log("loop 4")
            mergedArray.push(arr2[pointer2])
            if(pointer2 < arr2.length - 1) pointer2++    //stops pointers exceeding array
        } else if(arr1[pointer1] == arr2[pointer2]){
            console.log("loop 5")
            mergedArray.push(arr1[pointer1])
            if(pointer1 < arr1.length - 1) pointer1++    //stops pointers exceeding array size
        }
    }
    return mergedArray
}

console.log("\n" + mergeSortedArrays(sorted1, sorted2))*/

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            k--;
            j--;
        } else {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    
    while (i >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
    }
    return nums1
    
};

console.log("\n" + merge(sorted1, g, sorted2, v))