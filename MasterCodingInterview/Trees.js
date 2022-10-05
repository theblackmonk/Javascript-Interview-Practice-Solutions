//Trees

//Binary Search Tree Node
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
    
}

/*
In a Binary Tree we can count the levels like this
Level 0: 2^0 = 1
Level 1: 2^1 = 2
Level 2: 2^2 = 4
Level 3: 2^3 = 8

#of nodes = 2^h - 1
    or
log nodes = height
    log 100 = 2  aka 10^2 = 100

There are efficiencies because we don't check every branch
    Like looking finding your name in a phone book
    Search Directory, Then Search O page
*/

class BinarySeachTree {
    constructor(){
        this.root = null
    }

    insert(value){
        //if root

        //else compare to parent (while loop until value.left == null or value.right == null)
        //if smaller value = parent.left 
        //if larger value = parent.right

        const newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            //this will infinite loop until we exit
            while(true) {
                if(value < currentNode.value) {
                    //Go Left
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    //Go Right if value is greater or equal
                    if(!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value){
        if(!this.root) {
            return false
        }

        let currentNode = this.root
        //While loop exits until the node we're looking for doesn't exist meaning we didn't find it
        while(currentNode){
            if(value < currentNode.value) {
                currentNode = currentNode.left
            } else if(value > currentNode.value) {
                currentNode =currentNode.right
            } else if (currentNode.value === value) {
                return currentNode
            }
        }
        return false
    }
    //remove
}

const tree = new BinarySeachTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(9))

//traverse and print out string
console.log(JSON.stringify(traverse(tree.root)))

/*
         9
     4      20
   1   6  15  170
*/

function traverse(node) {
    const tree = { value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}