//Udemy Big O
const boxes = [1,2,3,4,5]

function logAllPairs(boxes){
    for(let i=0;i<boxes.length;i++){                           //iterate through with first pointer
        for(let j=i;j<boxes.length;j++) console.log("pair: ", boxes[i], " ", boxes[j])  //iterate through with second pointer
    }
}

//logAllPairs(boxes)    //call function to console.log all pairs


//objects example---------------------------------------------------
//grab first tweet and most recent tweet
//if there are a lot of tweets this could be very inefficient to search
const array = [{
    tweet: 'real eyes', 
    date: 2012
    }, {
    tweet: 'realize', 
    date: 2014
    }, {
    tweet: 'real lies', 
    date: 2018
}]

console.log(array[0].date, array[0].tweet)


//'helloWorld'.length   //Javascript has .length property built in. It is just a lookup //O(1)

//multiple ways to do loops in JS-----------------------------------
console.log("")

const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'squirt']

//Time: O(n)  Space: O(1)
function findNemo(array) {
    for (let i=0; i < array.length; i++){
        if (array[i] === 'nemo') {
            console.log('FOUND NEMO!')
        }
    }
}

findNemo(everyone)


//Alternative
function findNemo2(array){
    array.forEach(fish => {
        if(fish === 'nemo') console.log("FOUND NEMO!!")
    })
}

findNemo2(everyone)


//Alternative
function findNemo3(array){
    for (let fish of array){
        if(fish === 'nemo') console.log('FOUND NEMO!!!')
    }
}

findNemo3(everyone)