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


//merge(nums1,m,nums2,n) ;
console.log(nums1);

/*
*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/
var merge_1 = function(nums1, m, nums2, n) {
    let currentIndex = m+n -1 ;
    m = m-1;
    n= n-1;
    while(n>=0){
        if(nums1[m] >= nums2[n]){
            nums1[currentIndex] = nums1[m];
            nums1[m] = 0;
            m--;
            currentIndex--;
        }else{
            nums1[currentIndex] = nums2[n];
            n--;
            currentIndex--;
        }
    }
    return nums1;
};



const nums3 =[4,0,0,0,0,0], m3=1 , nums4 = [1,2,3,5,6], n4=5;
//console.log(merge_1(nums1,m,nums2,n));

const merge_2 = (nums1, m, nums2, n) =>{
    let j =0;
    for(let i=0 ; i < nums1.length; i++){
        if(nums1[i] == 0 && j < n){
            nums1[i] = nums2[j];
            j++;
        }
    }

    nums1.sort((x,y) => x-y);
    return nums1;
}

const nums5=[-1,0,0,3,3,3,0,0,0], m5=6, nums6= [1,2,2], n6=3
console.log(merge_2(nums5,m5,nums6,n6));