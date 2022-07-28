/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    nums1.sort((x,y) => x-y);
    nums2.sort((x,y) => x-y);
    const result =[];
    let i =  0 , j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        }
        
        if(nums1[i] > nums2[j]){
            j++;
        }
        
        if(nums1[i] == nums2[j]){
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    
    return result;
};