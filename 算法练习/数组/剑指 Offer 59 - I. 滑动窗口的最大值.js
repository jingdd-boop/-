/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if(k<=1) return nums;
  const res = [];
  for(let i = 0;i < nums.length-k+1;i++) {
    res.push(Math.max(...nums.slice(i,i+k)));
  }
  return res;
};

