/**
 * @param {number[]} nums
 * @return {number}
 */
/*
*Brutal force
*/
var triangleNumber = function(nums) {
    let count = 0 ;
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i +1 ; j < nums.length; j++){
            for(let k = j+1; k< nums.length; k++){
                if(nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i] ){
                    count++;
                }
            }
        }
    }

    return count;
};

/*
*Binary Search
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumberBinarySearchApproach = function(nums) {
    let count = 0 ;
    nums.sort((a,b) => a - b);

    for(let i = 0 ; i < nums.length; i++){
        let k = i + 2 ;
        for(let j = i + 1 ; j < nums.length -1 && nums[i] != 0 ; j++ ){
            k = binarySearch(nums, k , nums.length -1 , nums[i] + nums[j]);
            count += k - j - 1;
        }
    }

    return count;
};

const binarySearch=(nums, left , right , threshold) =>{
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] >= threshold){
            right = mid -1 ;
        }else{
            left = mid + 1;
        }
    }

    return left;
}

const nums=[2,2,3,4];
console.log(triangleNumberBinarySearchApproach(nums));
