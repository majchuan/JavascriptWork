/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const hash_num ={};
    const result = new Set();

    for(let num of nums){
        if(hash_num[num] != null){
            hash_num[num]++;
        }else{
            hash_num[num]=1;
        }

        if(hash_num[num] > (nums.length / 3)){
            result.add(num);
        }
    }

    return [...result];
};

/*
*O(1) Space, solve th eproblem in linear time
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElementLinear = function(nums) {
    let cnt1 = 0
    let cnt2 = 0
    let el1 = -Infinity
    let el2 = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (cnt1 == 0 && el2 != nums[i]) {
            cnt1 = 1
            el1 = nums[i]
        } else if (cnt2 == 0 && el1 != nums[i]) {
            cnt2 = 1
            el2 = nums[i]
        } else if (nums[i] == el1) {
            cnt1++
        } else if (nums[i] == el2) {
            cnt2++
        } else {
            cnt1--
            cnt2--
        }
    }
    let number = []
    cnt1 = 0
    cnt2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (el1 == nums[i]) {
            cnt1++
        }
        if (el2 == nums[i]) {
            cnt2++
        }
    }
    let mini = Math.floor(nums.length / 3) + 1
    if (cnt1 >= mini) {
        number.push(el1)
    }
    if (cnt2 >= mini) {
        number.push(el2)
    }
    number.sort(function (a, b) { return a - b });
    return number
};

const nums=[2,2];
console.log(majorityElement(nums));
