/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    const hash_num={};
    for(let i = 0 ; i < nums.length; i++){
        if(hash_num[nums[i]] != null){
            if(Math.abs(hash_num[nums[i]] - i) <=k ){
                return true;
            }
            hash_num[nums[i]] = i;
        }else{
            hash_num[nums[i]] = i;
        }
    }
    return false;
};

const nums = [1,2,3,1], k = 3;
const nums1 = [1,0,1,1], k1 = 1;
console.log(containsNearbyDuplicate(nums1,k1));

/*
*Sliding windows solution
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicateSlidingWindows = function(nums, k) {
    
    if (k== 0) return false;
    
    const hash_nums={};
    
    for(let i = 0 ; i < nums.length ; i++){
        if(hash_nums[nums[i]] != null) return true;
        
        if(i >= k){
            delete hash_nums[nums[i-k]];
            
        }
        
        hash_nums[nums[i]] =i;
    }
    
    return false;
};