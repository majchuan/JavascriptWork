/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    nums1.sort((x,y) => x-y);
    nums2.sort((x,y) => x-y);
    nums3.sort((x,y) => x-y);
    nums4.sort((x,y) => x-y);
    let hash_sum={}
    let counter = 0 ;
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j<nums2.length ; j++){
            let sum = nums1[i] + nums2[j];
            hash_sum[sum] ? hash_sum[sum]++ : hash_sum[sum] = 1 ;
        }
    }

    for(let i = 0; i < nums3.length ; i++){
        for(let j= 0; j < nums4.length; j++){
            let sum = nums3[i] + nums4[j];
            if(hash_sum[0 - sum] > 0){
                hash_sum[0 - sum]--;
                counter++;
            } 
        }
    }

    return counter ; 
    
};


const nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2];
const nums11 =[-1,-1], nums22= [-1,1], nums33=[-1,1], nums44= [1,-1];

console.log(fourSumCount1(nums11, nums22, nums33, nums44));