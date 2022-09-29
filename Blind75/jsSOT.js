//https://www.youtube.com/watch?v=gVUrDV4tZfY

let a = 9
let b = 11


var getSum = function(a, b) {
    if (a==0){
        return b;
    }
    else if (b==0){
        return a;
    }
    else{
        console.log("a: ", a, " b: ", b, " a^b: ", a^b, " a&b: ", a&b, "(a&b)<<1: ", a&b<<1)
        //console.log("getSum() ", getSum(a,b))
        return getSum((a^b),(a&b)<<1);
    }
    
};

//if a&b = 0 then we have no more carries
console.log("Result: ", getSum(a,b))

//32168421
// 0 00000