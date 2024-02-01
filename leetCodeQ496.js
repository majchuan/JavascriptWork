/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = new Array(nums1.length).fill(-1);

    for(let i = 0 ; i < nums1.length ; i++){
        const stack = [];
        for(let j = 0 ; j < nums2.length ; j++){
            if(nums1[i] == nums2[j]){
                stack.push(nums2[j]);
            }

            while(stack.length > 0 && nums2[j] > stack[stack.length -1]){
                result[i] = nums2[j];
                stack.pop();
                break;
            }
        }
    }

    return result;
};