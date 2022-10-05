//Stacks and Queues

//Stack is Last in First Out like a stack of dishes in the sink
class Stack {
    constructor(){
        this.stack = []
    }

   
    peek(){
        return console.log(this.stack[this.stack.length-1])
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        this.stack.pop()
    }

    view(){
        console.log(this.stack)
    }
}

const myStack = new Stack()
myStack.push("Discord")
myStack.push("Udemy")
myStack.push("Google")
myStack.view()
myStack.peek()
myStack.pop()
myStack.peek()
myStack.view()


//Teacher Example--------------------------------------------------------------
class Stack2 {
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        this.array.pop()
        return this
    }

    view(){
        console.log(this.stack)
    }
}
console.log("\n" + "teacher example")
const myStack2 = new Stack2()
console.log(myStack2.push("Discord"))
console.log(myStack2.push("Udemy"))
console.log(myStack2.push("Google"))
console.log(myStack2.pop())
console.log(myStack2.peek())
console.log(myStack2.peek())





