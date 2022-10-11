//Implement Queue using Stacks
//https://leetcode.com/problems/implement-queue-using-stacks/description/

/*
#1 Key
Queue using 2 stacks

#2 I/O Edge
object calls, output will be an array

#3 Goal
Low time complexity with a reasonably low space complexity

#4 Brute Force

[1,2,3]
[3,2,1]


[1,2,3]
[3,2,1]


[1,2]

[stack]
[2,1]

create a new stack each time something is pushed to the queue
[1,2, 3]
                    [value, old array]
[1]  //erase         [3, 2, 1]
[2, 1]               //erase 
[value, old array]

Stack can be created with an array or linked list

1) when array size = 1 then no difference, start first array
2) array size > 1 , add value to beggining and then copy in old array


Pop
1) Just pop off a value

Peek
1) View the last value



*/

var MyQueue = function() {
    
};

/** 
 * @param {number} x
 * @return {void}
 */

let arr1 = []
    let arr2 = []
    let placeHolder = []
MyQueue.prototype.push = function(x) {
    if(arr1.length == 0){
        arr1.push(x)
    } else if(arr1.length <= arr2.length){
        //erase arr1
        arr2.push(x)
        //iterate with a pointer through opposite array
        //start at index 0 and go to end
        for(let i =0; i<arr1.length; i++){
            arr2.push(arr1[i])
        }
    } else {
        arr1.push(x)
        //iterate with a pointer through opposite array
        //start at index 0 and go to end
        for(let i =0; i<arr2.length; i++){
            arr1.push(arr2[i])
        }
    }
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 




push(1)        push(2)         push(3)        push(4)        pop()

[1]            [1,2]           [1,2,3]        [1,2,3,4]      [2,3,4]


arr1 [1]       [1,2]           [1,2,3]        [1,2,3,4]      [2,3,4]
arr2                                          [4,3,2,1]      [4,3,2]


during pop() reverse the list (push all to new array) then pop off and reverse it all back










*/



