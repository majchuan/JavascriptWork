/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
we can make two elements equal if their possible value ranges overlap. 
For instance, when k = 2 and we have the numbers 1 and 4, we can change them both to 3. 
This is possible because 1 can become any number from -1 to 3, 
and 4 can become any number from 2 to 6. Since these ranges overlap, 
we can select a number from that overlapping section.
Thus, we can conclude that in our collection of ranges, all those that overlap can be changed to have equal values. 
Therefore, the highest number of equal values will be equal to the largest collection of overlapping ranges.
o efficiently count overlapping ranges, consider two numbers x and y, where x≤y. Now, 
x and y can be converted to the same number as long as the maximum possible value of the changed x is greater 
than or equal to the minimum possible value of the changed
for example:
x <= y;
x+k >= y-k;
y-x <= 2k;
If the condition is violated, we adjust the left boundary to restore the range. 
The maximum length of this range across all positions gives us the desired result.
*/
var maximumBeauty = function(nums, k) {
    nums.sort((a,b) => a - b);
    let maxBeauty = 0;
    let left = 0;
    let right =0;
    while(left < nums.length){
        while(right < nums.length && nums[right] - nums[left] <= 2*k){
            right++;
        }

        maxBeauty = Math.max(maxBeauty, right - left);
        left++;
    }

    return maxBeauty;
};

const nums=[4,6,1,2];
console.log(maximumBeauty(nums,2));