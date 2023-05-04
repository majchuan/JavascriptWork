/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const hash_nums1 ={};
    const hash_nums2 ={};
    for(let num of nums1){
        hash_nums1[num] ? hash_nums1[num]++ : hash_nums1[num] = 1;
    }

    for(let num of nums2){
        hash_nums2[num] ? hash_nums2[num]++ : hash_nums2[num] = 1;
    }

    const ans1 = [];
    for(let key in hash_nums1){
        if(hash_nums2[key] == null){
            ans1.push(key);
        }
    }

    const ans2 = [];
    for(let key in hash_nums2){
        if(hash_nums1[key] == null){
            ans2.push(key);
        }
    }

    return [ans1, ans2];
};