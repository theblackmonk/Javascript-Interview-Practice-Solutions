//Javascript Common Questions     https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/javascript/javascript-quiz.md

//--------------Question 7------------------
class Animal {
    //static = a method or property that belongs to a class and not any one object (declared later)
    static belly = []
    static extra() {console.log("Hi")}
    eat() { Animal.belly.push("food");}
}

let a = new Animal();
a.eat();
Animal.extra()
console.log(Animal.belly[0]) //prints food
//------------------------------------------



//------------------------------------------
/*
you'd need to apply the bear object when calling roar so 'this' takes 
the scope of the bear object and now has a 'this.sound'.
   bear.bind(roar); // you can't call bind on an object its a function method
   roar.bind(bear); // bind will bind the correct this value but it doesn't call the function so you would need to change this to
   roar.bind(bear)() for it to work properly
   bear[roar](); // bear doesn't have a roar key
*/
var sound = "grunt";
var bear = { sound: "roar"}; 
function roar() {
  console.log(this.sound);
}

roar.apply(bear)     //prints roar      
//------------------------------------------



//------------------------------------------
let animals = ["tiger","jaguar","eagle"];
animals.pop()
console.log(animals.pop()); //Prints jaguar
//------------------------------------------



//--------------Question 8------------------
//(function (j) {})(*pass in this value*);  immediately invoked function execution
for (var i = 1; i <= 4; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    })(animals);
  }
//------------------------------------------

/*
//Old Funciton
let show = function () { console.log('Anonymous function'); };

//ES6 Arrow Function
let show = () => console.log('Anonymous function');


//#2 Old Function
let add = function (a, b) { return a + b; };

//ES6 Arrow Function
let add = (a, b) => a + b;   
*/


//JavaScript only has one construct: objects. 
//Each object has a private property which holds a link to another object called its prototype