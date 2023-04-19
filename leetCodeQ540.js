/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let head = 0;
    let tail = nums.length - 1;

    while(head < tail) {
        let mid = Math.floor((head+tail)/2);
        let isEven = (head-mid) % 2 === 0;

        if(nums[mid-1] !== nums[mid] && nums[mid] !== nums[mid+1]) {
            return nums[mid];
        }

        if(nums[mid-1] === nums[mid]) {
            if(isEven) {
                tail = mid - 2;
            } else {
                head = mid + 1;
            }
        } else {
            if(isEven) {
                head = mid + 2;
            } else {
                tail = mid - 1;
            }
        }
    }

    return nums[head];
};

/*
*Slow approach with binary search.
*/

var singleNonDuplicateSlow = function(nums) {
    let left = 0 ;
    let right = nums.length-1;
    let mid = Math.floor((left + right)/2);

    if(nums.lenght ==1 ) return nums[0];

    if(nums.length == 2){
        return null;
    }

    if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]){
        return nums[mid];
    }

    if(nums[mid] == nums[mid-1]){
        let leftSingleNonDuplidate = singleNonDuplicate(nums.slice(0, mid+1));
        if(leftSingleNonDuplidate != null) return leftSingleNonDuplidate ;

        let rightSingleNonDuplidate = singleNonDuplicate(nums.slice(mid+1,nums.length));
        if(rightSingleNonDuplidate != null) return rightSingleNonDuplidate;
    }
    if(nums[mid] == nums[mid+1]){
        let leftSingleNonDuplidate = singleNonDuplicate(nums.slice(0, mid));
        if(leftSingleNonDuplidate != null) return leftSingleNonDuplidate ;

        let rightSingleNonDuplidate = singleNonDuplicate(nums.slice(mid,nums.length));
        if(rightSingleNonDuplidate != null) return rightSingleNonDuplidate;
    }
    
};

const nums = [1,2,2,3,3,4,4,8,8];
console.log(singleNonDuplicate(nums));