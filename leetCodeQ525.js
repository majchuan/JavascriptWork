/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Convert the problem to finding sub array with sum=0. Here we will consider all 0s as -1 all 1s as 1 when calculating sum of sub array
*/
 var findMaxLength = function(nums) {
    let map={};
    let sum = 0 ;
    let max = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        let val = nums[i] == 0 ? -1 : 1; 
        sum += val;
        
        if(sum == 0){
            max = Math.max(max, i+1);
        }
        
        if(map[sum] != null){
            max = Math.max(max, i - map[sum])
            //console.log("map[sum != null]", max, i, sum ,  map[sum], i - map[sum]);
        }else{
            map[sum] = i;
            //console.log("map[sum]",sum , i);
        }
    }
    
    return max;
};

