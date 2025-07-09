/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((x,y) => y-x);
    const nums_distinct = new Set(nums);

    if(nums_distinct.size >=3 ){
        return Array.from(nums_distinct)[2];
    }else{
        return Array.from(nums_distinct)[0];
    }
};

const nums=[2,2,3,1] ;
const nums1=[1,2];
console.log(thirdMax(nums1));