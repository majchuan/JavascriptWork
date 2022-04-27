/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
*Two pointers approach
*/
 var intersection = function(nums1, nums2) {
    nums1.sort((x,y) => x- y);
    nums2.sort((x,y) => x-y);
    const intersections = new Set();
    let n1 = 0;
    let n2 = 0;
    while(n1 < nums1.length && n2 < nums2.length){
        if(nums1[n1] < nums2[n2]){
            n1++;
        }else if (nums1[n1] > nums2[n2]){
            n2++;
        }else{
            intersections.add(nums1[n1]);
            n1++;
            n2++;
        }
    }
    
    
    return [...intersections];
    
};

/*
*hash approach
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersectionHashApproach = function(nums1, nums2) {
    const hash_nums1 = {} , hash_nums2={};
    for(let num of nums1){
        hash_nums1[num] ? hash_nums1[num]++ : hash_nums1[num] = 1 ;
    }
    
    for(let num of nums2){
        hash_nums2[num] ? hash_nums2[num]++ : hash_nums2[num] = 1 ;
    }
    
    const intersections = new Set();
    
    const hash_nums1_keys = Object.keys(hash_nums1);
    for(let key of hash_nums1_keys){
        if(hash_nums2[key]){
            intersections.add(key);
        }
    }
    
    const hash_nums2_key = Object.keys(hash_nums2);
    for(let key of hash_nums2_key){
        if(hash_nums1[key]){
            intersections.add(key);
        }
    }
    
    return [...intersections];
    
    
};