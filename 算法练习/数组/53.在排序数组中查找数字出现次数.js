/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var n = 0;
  for(let i = 0;i<nums.length;i++){
      if(nums[i] == target){
          n++;
      }
          
  }
  return n;
  
};