//Linked List
//Linked List are not native to JS
//They allow us the ability to insert and delete nodes not at the beginning or end of an array easily
//Elements are not indexed, we always start at the head and traverse until we hit null
//Linked Lists are scattered all over memory, generally slower to search through because of that

//Pointers - a reference to an object
//We are not copying the object. In memory there is only one object. They both point to the same location in memory
let obj1 = {a: true}
let obj2 = obj1
//Changing obj1 changes obj2 since obj2 is just a pointer
obj1.a = 'booya'
console.log('1', obj1)
console.log('2', obj2)


//Ex 10-->5-->16
/*let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: {
                    null
                }
            }
        }

    }
}*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    //append means add to the end
    //we must traverse thrugh the linked list by starting at the head until we hit a node where next = null
    //We then update null to the start of a new node and put null as the end of this added node
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this //returns the class, aka the linked list
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    //Traverse to index and index -1
    //Create new node and point it at index
    //Point index -1 to new node
    insert(index, value){
        if(index === 0) {
            this.prepend(value)
            return this.printList()
        }

        if(index >= this.length) {
            return this.append(value)
        }

        var indexCount = 0
        var beforeNode
        var afterNode = this.head
        while(indexCount !== index){
            beforeNode = afterNode
            afterNode = afterNode.next
            indexCount++
        }
        
        const newNode = new Node(value)
        newNode.next = beforeNode.next
        beforeNode.next = newNode
        
    }

    //Traverse to index, make the pointer from the before node point to the after node
    //The after node data is taken from the current node
    //the after node does not change
    remove(index){
       if(index === 0){
        this.head = this.head.next
       }

       if(index > this.length){
        return "node does not exist"
       }

       var currentNode = this.head     //start at the top
       var previousNode
       var counter = 0
       while(index !== counter){
            previousNode = currentNode          //increment both pointers
            currentNode = currentNode.next
            counter++
       }
       previousNode.next = currentNode.next
    }

    //Print entire linked list as array
    printList() {
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }


}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(11)
myLinkedList.prepend(3)
myLinkedList.insert(4, 99)
myLinkedList.remove(1)
console.log("\n" + myLinkedList.printList())







