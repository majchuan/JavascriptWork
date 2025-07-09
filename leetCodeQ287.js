/**
 * @param {number[]} nums
 * @return {number}
 */
/*
* Binary search method. All integer is between[1,n], so find mid,  and loop whole nums to find number <= mid, then the repeat number must be in 
* range [mid+1,n], otherwise [1, mid-1];
*/
var findDuplicateByBinarySearch = function(nums) {
    let left = 1 ;
    let right = nums.length;

    while(left < right){
        let mid = Math.floor((left + right) /2);
        let counter = 0 ;
        for(let num of nums){
            if(num <= mid){
                counter++;
            }
        }

        if(counter <= mid){
            left = mid+1;
        }else{
            right =mid-1;
        }
    }

    return left;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicateBinarySearch_1 = function(nums) {
    let left = 1 , right = nums.length - 1;
    let duplicate = -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let count = 0 ;
        for(let num of nums){
            if(num <= mid){
                count++;
            }
        }

        if(count > mid){
            duplicate = mid;
            right = mid -1;
        }else{
            left = mid+1;
        }
    }

    return duplicate ; 
};

/*
*Use two pointer, slow and fast pointer, if it has repeat number ,it must have cycle , use first do while loop find 
entry point of cycle. use second to find repeat number
*
*/
var findDuplicateByTwoPointer = function(nums) {
    let slow =0;
    let fast =0;
    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow != fast);

    fast = 0 ;
    while(true){
        slow = nums[slow];
        fast = nums[fast];
        if(slow == fast){
            break;
        }
    }

    return slow; 
};

const nums=[1,3,4,2,2];
console.log(findDuplicateByTwoPointer(nums));
