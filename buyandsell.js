/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minval = prices[0];
  let maxprofitval = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minval) minval = prices[i];
    if (prices[i] - minval > maxprofitval) maxprofitval = prices[i] - minval;
  }
  return maxprofitval;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
