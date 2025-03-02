/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let index1= 0;
    let index2 = 0 ;
    const result = [];
    while(index1 < nums1.length && index2 < nums2.length){
        if(nums1[index1][0] == nums2[index2][0] ){
            const sum = nums1[index1][1] + nums2[index2][1];
            result.push([nums1[index1][0], sum]);
            index1++;
            index2++;
            continue;
        }

        if(nums1[index1][0] < nums2[index2][0]){
            result.push(nums1[index1]);
            index1++;
        }else{
            result.push(nums2[index2]);
            index2++;
        }
    }

    while(index1 < nums1.length){
        result.push(nums1[index1]);
        index1++;
    }

    while(index2 < nums2.length){
        result.push(nums2[index2]);
        index2++;
    }

    return result;
};