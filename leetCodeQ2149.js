/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positive = [];
    const negative = [];

    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] >= 0){
            positive.push([nums[i], i]);
        }else{
            negative.push([nums[i] ,i ]);
        }
    }
    //console.log(positive, negative)
    let left = 0, right = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        if( i % 2 == 0){
            nums[i] = positive[left][0];
            left++;
        }else{
            nums[i] = negative[right][0];
            right++;
        }
    }


    return nums;
};