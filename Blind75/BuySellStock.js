//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/


/*
Two Pointers
right - left = profit

Two Pointers
Math.min = lowest value
Math.max = current pointer minus minimum value

There is one min so we can store that as a value
The max we can iterate to


*/
var prices = [7,1,1,1,1,1,1]

//Time: O(n)   Space: O(1)
var maxProfit = function(prices){
   if(prices == null || prices.length <= 1) return 0
   let minBuy = prices[0]
   let profit = 0
   for(let i = 1; i<prices.length;i++){
    minBuy = Math.min(minBuy, prices[i])
    profit = Math.max(profit, prices[i] - minBuy)
   }
   return profit
}

console.log(maxProfit(prices))


//------------------------------------------------
//Same problem but also return the indexes


var prices2 = [7,1,6,3,4,8,4]

var maxProfit2 = function(prices){
    if(prices == null || prices.length <= 1) return 0
    let minBuy = prices[0]
    let profit = 0
    let minIndex = 0
    let maxIndex = 0
    for(let i = 1; i<prices.length;i++){
        if(prices[i] < minBuy){
            minBuy = Math.min(minBuy, prices[i])
            minIndex = i
        }

        if((prices[i] - minBuy) > profit){
            profit = Math.max(profit, prices[i] - minBuy)
            maxIndex = i
        }
    }
    return [profit, minIndex, maxIndex]
}

console.log(maxProfit2(prices2))
