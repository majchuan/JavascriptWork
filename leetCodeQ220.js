/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const sortedIndex = nums.map((val,index) =>({val,index})).sort((x,y) => x.val - y.val );
    
    let start = 0 ;
    let end = 1 ;
    console.log(sortedIndex);
    while(end < nums.length){
        console.log("start" , start ,"end", end);
        if(start == end){
            end++;
            continue;
        }
        
        const a = sortedIndex[start] ;
        const b = sortedIndex[end];
        
        if(Math.abs(a.val - b.val) > t){
            start++;
            continue;
        }
        
        if(Math.abs(a.index -b.index) > k){
            end++;
            continue;
        }
        
        return true;
    }
    
    return false;
};
const nums = [1,2,3,1], k = 3, t = 0;
const nums1 = [1,5,9,1,5,9] , k1 = 2, t1 = 3;
const nums2 = [1,2,5,6,7,2,4], k2 = 4, t2 = 0;
const nums3 =[1,2,1,1] , k3 = 1,t3=0
console.log(containsNearbyAlmostDuplicate(nums3,k3,t3));