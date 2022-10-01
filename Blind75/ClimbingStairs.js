//https://leetcode.com/problems/climbing-stairs/discuss/2383701/Fastest-Solution-Explained0ms100-O(n)time-complexity-O(n)space-complexity


// n = 2
//n=4
//Output = 5



/*
n=5
Output = 8


n=6
Output = 12



*/

function factorial(n){
    if(n == 1 || n == 0)
        return 1;
    else
        return n * factorial(n-1)
}

//console.log(factorial(4))

//dw[i] total number of different ways to get i steps
//dw[n]
//dw[n] = dw[n-1] + dw[n-2] because we can either take 1 or 2 steps
//There is one way to take 1 step and 2 ways to take 2 steps


function climbStairs(n) {
    let dp = new Array(n + 1)
    dp[1] = 1, dp[2] = 2

    for(let i=3; i<46; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}

console.log("climbStairs(2): ", climbStairs(2), "  climbStairs(4): ", climbStairs(4), "  climbStairs(5): ", climbStairs(5), "  climbStairs(45): ", climbStairs(40))

