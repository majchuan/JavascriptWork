/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    let len = nums1.length - 1
    m--;
    n--;
     
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[len] = nums1[m]; 
            m--
        } else {
            nums1[len] = nums2[n];
            n--
        }
        len--
    
    }
    return nums1
     
 };

const nums1=[4,5,6,0,0,0] , m = 3 , nums2=[1,2,3], n =3


merge(nums1,m,nums2,n) ;
console.log(nums1);


const sortedString ="utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh";
console.log(sortedString.split("").sort().join(""));

Number.MAX_SAFE_INTEGER