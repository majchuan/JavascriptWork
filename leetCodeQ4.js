/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let mergeArray=[];
    let i = 0, j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] > nums2[j]){
            mergeArray.push(nums2[j]);
            j++;
        }else{
            mergeArray.push(nums1[i]);
            i++;
        }
    }
    
    if(i < nums1.length){
        mergeArray=[...mergeArray, ...nums1.slice(i, nums1.length)];
    }
    
    if(j < nums2.length){
        mergeArray =[...mergeArray, ...nums2.slice(j, nums2.length)];
    }
    
    if(mergeArray.length % 2 == 0){
        let midIndex = mergeArray.length / 2 ;
        return (mergeArray[midIndex -1 ] + mergeArray[midIndex])/2;
    }else{
        let midIndex = Math.floor(mergeArray.length/2);
        return mergeArray[midIndex];
    }
};

const nums1 = [1,3], nums2 = [2] ;
const nums3 = [1,2], nums4 = [3,4]
console.log(findMedianSortedArrays(nums3, nums4));

const mergeTwoSortedArray = (nums1, nums2) =>{
    const length = nums1.length + nums2.length;
    const mergeNums =[];
    let i = 0, j = 0 ;

    while(mergeNums.length < length){
        if(nums1[i] < nums2[j] || j >= nums2.length){
            mergeNums.push(nums1[i]);
            i++;
        }else if(nums2[j] <= nums1[i] || i >= nums1.length){
            mergeNums.push(nums2[j]);
            j++;
        }
    }

    console.log(mergeNums);
    return mergeNums;
}

console.log(mergeTwoSortedArray(nums1, nums2));
