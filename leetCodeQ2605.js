/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    const minNums1 = Math.min(...nums1);
    const minNums2 = Math.min(...nums2);
    const minNum = Math.min(minNums1* 10 + minNums2 , minNums2 * 10 + minNums1);
    let result = Number.MAX_SAFE_INTEGER;
    const hash_num = {};
    for(let num of nums1){
        hash_num[num] = 1;
    }

    for(let num of nums2){
        if(hash_num[num]){
            result = Math.min(result, num);
        }
    }

    return Math.min(result, minNum);
};