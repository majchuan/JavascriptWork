/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    return calCulation(nums1, nums2) + calCulation(nums2, nums1);
};

const calCulation= (nums1, nums2) =>{
    let count = 0;
    for(let i = 0 ; i < nums1.length ; i++){
        let left = 0 ; 
        let right = nums2.length-1;
        const square = nums1[i] * nums1[i];

        while(left < right){
            const product = nums2[left] * nums2[right];
            if(square == product){
                  if(nums2[left] == nums2[right]){
                    count += (right - left) * (right - left + 1 ) / 2 ;
                    break;
                }else{
                    let x = left , y = right;

                    while(left < right && nums2[left] == nums2[x]){
                        left++;
                    }

                    while(right >= 0 && nums2[right] == nums2[y]){
                        right--;
                    }

                    count += (left - x) * (y - right);
                }
            }

            if(square > product){
                left++;
            }

            if(square < product){
                right--;
            }
        }
    }

    return count;
}